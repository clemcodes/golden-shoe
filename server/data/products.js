const products = [
  {
    _id: '1',
    name: 'YELLOW LEATHER MOCASSIN',
    image1: '/images/W1-1-1.jpg',
    image2: '/images/W1-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus.',
    gender:'WOMEN\'S',
    category: 'Mocassins',
    price: 29.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    size: [
      {
        num: 3,
        name:'xs',
        stock:3
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:6
      },
      {
        num: 6,
        name:'l',
        stock:3
      },
      {
        num: 7,
        name:'xl',
        stock:8
      }
    ]
  },
  {
    _id: '2',
    name: 'WHITE LEATHER MOCASSIN',
    image1: '/images/W2-1-1.jpg',
    image2: '/images/W2-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus',
    gender:'WOMEN\'s',
    category: 'Mocassins',
    price: 27.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    size: [
      {
        num: 3,
        name:'xs',
        stock:3
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:6
      },
      {
        num: 6,
        name:'l',
        stock:3
      },
      {
        num: 7,
        name:'xl',
        stock:8
      }
    ]
  },
  {
    _id: '3',
    name: 'BLUE LEATHER MOCASSIN',
    image1: '/images/W3-1-1.jpg',
    image2: '/images/W3-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus',
    gender:'WOMEN\'s',
    category: 'Mocassins',
    price: 28.99,
    countInStock: 5,
    rating: 3.0,
    numReviews: 3,
    size: [
      {
        num: 3,
        name:'xs',
        stock:3
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:6
      },
      {
        num: 6,
        name:'l',
        stock:3
      },
      {
        num: 7,
        name:'xl',
        stock:8
      }
    ]
  },
  {
    _id: '4',
    name: 'VINTAGE LACE-UP',
    image1: '/images/W4-1-1.jpg',
    image2: '/images/W4-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus',
    gender:'WOMEN\'s',
    category: 'Lace-up',
    price: 39.99,
    countInStock: 0,
    rating: 5.0,
    numReviews: 7,
    size: [
      {
        num: 3,
        name:'xs',
        stock:0
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:0
      },
      {
        num: 6,
        name:'l',
        stock:0
      },
      {
        num: 7,
        name:'xl',
        stock:0
      }
    ]
  },
  {
    _id: '5',
    name: 'VINTAGE ANKLE BOOT',
    image1: '/images/W5-1-1.jpg',
    image2: '/images/W5-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus',
    gender:'WOMEN\'s',
    category: 'Boots',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    size: [
      {
        num: 3,
        name:'xs',
        stock:3
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:6
      },
      {
        num: 6,
        name:'l',
        stock:3
      },
      {
        num: 7,
        name:'xl',
        stock:8
      }
    ]
  },
  {
    _id: '6',
    name: 'LEATHER ANKLE BOOT',
    image1: '/images/W6-1-1.jpg',
    image2: '/images/W6-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus',
    gender:'WOMEN\'s',
    category: 'Boots',
    price: 59.99,
    countInStock: 0,
    rating: 4.0,
    numReviews: 12,
    size: [
      {
        num: 3,
        name:'xs',
        stock:3
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:6
      },
      {
        num: 6,
        name:'l',
        stock:3
      },
      {
        num: 7,
        name:'xl',
        stock:8
      }
    ]
  },
  {
    _id: '7',
    name: 'BROWN LEATHER MOCASSIN',
    image1: '/images/M1-1-1.jpg',
    image2: '/images/M1-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus.',
    gender:'MEN\'S',
    category: 'Mocassins',
    price: 29.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 5,
    size: [
      {
        num: 3,
        name:'xs',
        stock:3
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:6
      },
      {
        num: 6,
        name:'l',
        stock:3
      },
      {
        num: 7,
        name:'xl',
        stock:8
      }
    ]
  },
  {
    _id: '8',
    name: 'BLACK LEATHER MOCASSIN',
    image1: '/images/M2-1-1.jpg',
    image2: '/images/M2-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus.',
    gender:'MEN\'S',
    category: 'Mocassins',
    price: 29.99,
    countInStock: 10,
    rating: 4.0,
    numReviews: 2,
    size: [
      {
        num: 3,
        name:'xs',
        stock:3
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:6
      },
      {
        num: 6,
        name:'l',
        stock:3
      },
      {
        num: 7,
        name:'xl',
        stock:8
      }
    ]
  },
  {
    _id: '9',
    name: 'BROWN LEATHER LACE-UP',
    image1: '/images/M3-1-1.jpg',
    image2: '/images/M3-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus.',
    gender:'MEN\'S',
    category: 'Lace-up',
    price: 58.99,
    countInStock: 10,
    rating: 4.2,
    numReviews: 1,
    size: [
      {
        num: 3,
        name:'xs',
        stock:3
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:6
      },
      {
        num: 6,
        name:'l',
        stock:3
      },
      {
        num: 7,
        name:'xl',
        stock:8
      }
    ]
  },
  {
    _id: '10',
    name: 'WHITE LEATHER SNEAKERS',
    image1: '/images/M4-1-1.jpg',
    image2: '/images/M4-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus.',
    gender:'MEN\'S',
    category: 'Sneakers',
    price: 32.99,
    countInStock: 1,
    rating: 4.5,
    numReviews: 10,
    size: [
      {
        num: 3,
        name:'xs',
        stock:3
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:6
      },
      {
        num: 6,
        name:'l',
        stock:3
      },
      {
        num: 7,
        name:'xl',
        stock:8
      }
    ]
  },
  {
    _id: '11',
    name: 'NAVY LEATHER SNEAKERS',
    image1: '/images/M5-1-1.jpg',
    image2: '/images/M5-1-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a rutrum ligula. Morbi nec ipsum lectus. Vivamus viverra massa vitae cursus aliquet. Nam vel mollis lectus.',
    gender:'MEN\'S',
    category: 'Sneakers',
    price: 42.99,
    countInStock: 4,
    rating: 4.8,
    numReviews: 12,
    size: [
      {
        num: 3,
        name:'xs',
        stock:3
      },
      {
        num: 4,
        name:'s',
        stock:0
      },
      {
        num: 5,
        name:'m',
        stock:6
      },
      {
        num: 6,
        name:'l',
        stock:3
      },
      {
        num: 7,
        name:'xl',
        stock:8
      }
    ]
  },
]

module.exports = products
