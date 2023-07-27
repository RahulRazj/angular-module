import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService, ICourse } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  course!: ICourse | undefined;
  isCourseBought!: boolean;
  username!: string;

  // payment config for stripe payment
  paymentHandler: any = null;
  stripeAPIKey: any =
    'pk_test_51NXdakSAqi6ZKvm40OYZo40zhvJoFkJaUzQ6pz67hTlbaF8L9y6HEEm4dZJhZ2MRnqDZeQdFG78sgkaawOzYZGOU00pnRVJoFC';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.courseService.getCourses().subscribe((courses) => {
        this.course = courses.filter((course) => course.id === +id).at(0);
        const userCourses = JSON.parse(
          localStorage.getItem(`${this.username}Courses`) || '[]'
        );
        this.isCourseBought = userCourses.find(
          (courseId: number) => courseId === this.course?.id
        );
      });
    }
    const username = localStorage.getItem('userDetails');
    if (username) {
      this.username = username;
    }
    this.invokeStripe();
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';

      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'IN',
          token: function (stripeToken: any) {
            console.log(stripeToken);

            // alert('Payment has been successfull!');
            console.log('payment initiated');
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {},
    });

    paymentHandler.open({
      name: 'Qourse.com',
      description: '3 widgets',
      amount: amount * 100,
      currency: 'INR',
    });
  }

  handleBuyCourse(id: number) {
    // if course is already bought redirect to view course
    if (this.isCourseBought) {
      this.router.navigate([`view-course/${id}`]);
      return;
    }

    // check if user is logged in
    if (this.username) {
      this.makePayment(this.course?.price);

      // getting all user courses
      const userCourses = JSON.parse(
        localStorage.getItem(`${this.username}Courses`) || '[]'
      );

      // checking if the user has already bought the course
      if (!userCourses.find((courseId: number) => courseId === id)) {
        userCourses.push(id);
      }

      localStorage.setItem(
        `${this.username}Courses`,
        JSON.stringify(userCourses)
      );
      this.isCourseBought = true;
    } else {
      this.router.navigate(['auth'], { state: { isLoginMode: true } });
    }
  }
}
