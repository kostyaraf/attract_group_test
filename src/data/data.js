const data = [
  { id: 1, name: 'Name 1', city: 1, category: 2, price: 50 },
  { id: 2, name: 'Name 2', city: 4, category: 1, price: 100 },
  { id: 3, name: 'Name 3', city: 5, category: 1, price: 1 },
  { id: 4, name: 'Name 4', city: 2, category: 4, price: 150 },
  { id: 5, name: 'Name 5', city: 3, category: 5, price: 200 },
  
  { id: 6, name: 'Name 1', city: 1, category: 4, price: 50 },
  { id: 7, name: 'Name 2', city: 4, category: 1, price: 100 },
  { id: 8, name: 'Name 3', city: 5, category: 1, price: 1 },
  { id: 9, name: 'Name 4', city: 2, category: 4, price: 150 },
  { id: 10, name: 'Name 5', city: 3, category: 5, price: 200 },
  { id: 11, name: 'Name 1', city: 1, category: 2, price: 50 },
  { id: 12, name: 'Name 2', city: 4, category: 3, price: 100 },
  { id: 13, name: 'Name 3', city: 5, category: 1, price: 1 },
  { id: 14, name: 'Name 4', city: 2, category: 4, price: 150 },
  { id: 15, name: 'Name 5', city: 3, category: 5, price: 200 },
  { id: 16, name: 'Name 1', city: 1, category: 2, price: 50 },
  { id: 17, name: 'Name 2', city: 4, category: 1, price: 100 },
  { id: 18, name: 'Name 3', city: 5, category: 1, price: 1 },
  { id: 19, name: 'Name 4', city: 2, category: 4, price: 150 },
  { id: 20, name: 'Name 5', city: 3, category: 5, price: 200 },
]

const images = [
  'https://picsum.photos/700/500',
  'https://picsum.photos/200/300',
  'https://picsum.photos/700/300',
  'https://picsum.photos/400/600',
  'https://picsum.photos/100/100',

  'https://picsum.photos/700/500',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/700/300',
  'https://picsum.photos/400/600',
  'https://picsum.photos/700/300',
  'https://picsum.photos/400/600',
  'https://picsum.photos/200/300',
  'https://picsum.photos/700/300',
  'https://picsum.photos/400/600',
  'https://picsum.photos/100/100',
  'https://picsum.photos/700/500',
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
  'https://picsum.photos/700/300',
  'https://picsum.photos/400/600',
  'https://picsum.photos/700/300',
  'https://picsum.photos/400/600',
  'https://picsum.photos/200/300',
  'https://picsum.photos/700/300',
  'https://picsum.photos/400/600',
  'https://picsum.photos/100/100',
]

let newData = data.map((obj, index) => {
  obj.image = images[index]
  return obj
})


export default newData
