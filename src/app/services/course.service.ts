import { Injectable } from '@angular/core';
import { Observable, find, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ILesson {
  name: string;
  type: string;
}
interface IContent {
  title: string;
  lessons: ILesson[];
}
export interface ICourse {
  id: number;
  name: string;
  description: string;
  rating: number;
  category: string[];
  price: number;
  content: IContent[];
  image: string;
  studentsEnrolled: number;
  noOfRatings: number;
  courseLengthHours: number;
  courseLengthMinutes: number;
  noOfLectures: number;
  instructorDetails: {
    name: string;
    intro: string;
    profile: string;
    image: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl: string = '/assets/db.json';
  constructor(private http: HttpClient) {}

  getCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.apiUrl);
  }

  // getCoursesByCategory(category: string): ICourse[] {
  //   let filteredCourses: ICourse[] = [];
  //   console.log({ category });
  //   this.getCourses().subscribe((courses: ICourse[]) => {
  //     filteredCourses = courses.filter((course: ICourse) =>
  //       course.category.includes(category)
  //     );
  //   });
  //   return filteredCourses;
  // }

  // getCourse(id: number): ICourse | undefined {
  //   let filteredCourse: ICourse | undefined;
  //   this.getCourses().subscribe(
  //     (courses: ICourse[]) =>
  //       (filteredCourse = courses
  //         .filter((course: ICourse) => course.id === id)
  //         .at(0))
  //   );
  //   return filteredCourse;
  // }

  // getCoursesByRating(rating: number): ICourse[] {
  //   let filteredCourses: ICourse[] = [];
  //   this.getCourses().subscribe(
  //     (courses: ICourse[]) =>
  //       (filteredCourses = courses.filter((course) => course.rating >= rating))
  //   );
  //   return filteredCourses;
  // }

  // searchCourses(searchParams: string): ICourse[] {
  //   let filteredCourses: ICourse[] = [];

  //   this.getCourses().subscribe(
  //     (courses: ICourse[]) =>
  //       (filteredCourses = courses.filter(
  //         (course: ICourse) =>
  //           course.name.toLowerCase().includes(searchParams.toLowerCase()) ||
  //           course.description
  //             .toLowerCase()
  //             .includes(searchParams.toLowerCase())
  //       ))
  //   );

  //   return filteredCourses;
  // }

  courses: ICourse[] = [
    {
      id: 1,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 3.6,
      noOfLectures: 42,
      noOfRatings: 34521,
      category: ['Web Development'],
      price: 3199,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
            {
              name: 'Installation',
              type: 'VIDEO',
            },
          ],
        },
        {
          title: 'Python Intro',
          lessons: [
            {
              name: 'Variables',
              type: 'VIDEO',
            },
            {
              name: 'Operators and Expressions',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 4353,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,

      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 2,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      noOfLectures: 42,
      category: ['Frontend Development'],
      price: 3199,
      courseLengthHours: 1130,
      noOfRatings: 34521,
      courseLengthMinutes: 24,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 3,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 2.6,
      noOfLectures: 42,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      noOfRatings: 34521,
      category: ['Backend Development'],
      price: 3199,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 4,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      noOfLectures: 42,
      category: ['Data Science'],
      noOfRatings: 34521,
      price: 3199,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 5,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 3.1,
      noOfLectures: 42,
      noOfRatings: 34521,
      category: ['Data Science'],
      price: 3199,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 6,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      noOfLectures: 42,
      noOfRatings: 34521,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      category: ['Backend Development'],
      price: 3199,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 7,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      noOfLectures: 42,
      noOfRatings: 34521,
      category: ['Frontend Development'],
      price: 3199,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 8,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      noOfLectures: 42,
      noOfRatings: 34521,
      category: ['Data Science'],
      price: 3199,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 9,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      noOfLectures: 42,
      noOfRatings: 34521,
      category: ['Python'],
      price: 3199,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 10,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      noOfLectures: 42,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      noOfRatings: 34521,
      category: ['Frontend Development'],
      price: 3199,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 11,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      noOfLectures: 42,
      courseLengthHours: 1130,
      noOfRatings: 34521,
      courseLengthMinutes: 24,
      category: ['Backend Development'],
      price: 3199,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 12,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      noOfLectures: 42,
      noOfRatings: 34521,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      category: ['Python'],
      price: 3199,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 13,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      courseLengthHours: 1130,
      noOfRatings: 34521,
      courseLengthMinutes: 24,
      category: ['Web Development'],
      price: 3199,
      noOfLectures: 42,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 14,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      noOfRatings: 34521,
      category: ['Frontend Development'],
      price: 3199,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      noOfLectures: 42,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 15,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      noOfLectures: 42,
      noOfRatings: 34521,
      category: ['Backend Development'],
      price: 3199,
      content: [
        {
          title: 'Course Overview Intro',
          lessons: [
            {
              name: 'Welcome Message version 2',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 16,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: ['Web Development'],
      price: 3199,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      noOfLectures: 42,
      noOfRatings: 34521,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 17,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: ['Frontend Development'],
      price: 3199,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      noOfRatings: 34521,
      noOfLectures: 42,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 18,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      courseLengthHours: 1130,
      courseLengthMinutes: 24,
      noOfLectures: 42,
      category: ['Data Science'],
      noOfRatings: 34521,
      price: 3199,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 19,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      courseLengthHours: 1130,
      noOfRatings: 34521,
      courseLengthMinutes: 24,
      noOfLectures: 42,
      category: ['Python'],
      price: 3199,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
    {
      id: 20,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      courseLengthHours: 1130,
      noOfRatings: 34521,
      courseLengthMinutes: 24,
      noOfLectures: 42,
      category: ['Web Development'],
      price: 3199,
      content: [
        {
          title: 'Course Overview',
          lessons: [
            {
              name: 'Welcome Message',
              type: 'VIDEO',
            },
          ],
        },
      ],
      image: '/assets/images/python.jpg',
      studentsEnrolled: 435,
      instructorDetails: {
        name: 'John Doe',
        intro: 'Good',
        profile: 'Teacher',
        image: '/assets/images/python.jpg',
      },
    },
  ];
}
