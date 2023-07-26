import { Injectable } from '@angular/core';

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
  category: string;
  price: number;
  content: IContent[];
  image: string;
  studentsEnrolled: number;
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
  constructor() {}

  getCourses(): ICourse[] {
    return this.courses;
  }

  getCoursesByCategory(category: string): ICourse[] {
    return this.getCourses().filter(
      (course: ICourse) => course.category === category
    );
  }

  getCourse(id: number): ICourse | undefined {
    return this.getCourses()
      .filter((course: ICourse) => course.id === id)
      .at(0);
  }

  searchCourses(searchParams: string): ICourse[] {
    console.log({ searchParams });
    return this.getCourses().filter(
      (course: ICourse) =>
        course.name.toLowerCase().includes(searchParams.toLowerCase()) ||
        course.description.toLowerCase().includes(searchParams.toLowerCase()) ||
        course.category.toLowerCase().includes(searchParams.toLowerCase())
    );
  }

  courses: ICourse[] = [
    {
      id: 1,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Web Development',
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
      category: 'Frontend Development',
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
      id: 3,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Backend Developemnt',
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
      category: 'Data Science',
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
      id: 5,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Data Science',
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
      id: 6,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Backend Development',
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
      category: 'Frontend Development',
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
      id: 8,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Data Science',
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
      id: 9,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Python',
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
      id: 10,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Frontend Development',
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
      category: 'Backend Development',
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
      category: 'Python',
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
      category: 'Web Development',
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
      id: 14,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Frontend',
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
      id: 15,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Backend',
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
      id: 16,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Backend',
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
      id: 17,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Frontend Development',
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
      id: 18,
      name: 'The Complete Python Bootcamp From Zero to Hero in Python',
      description:
        'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
      rating: 4.6,
      category: 'Data Science',
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
      category: 'Python',
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
      category: 'Web Development',
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
