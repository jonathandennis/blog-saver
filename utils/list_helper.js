const dummy = (blogs) => {
  return blogs.length === 0
    ? 1
    : 1
}

const totalLikes = (blogs) => {
  const getLikes = (sum, item) => {
    return sum + item.likes
  }
  return blogs.reduce(getLikes, 0)
}

const favoriteBlog = (blogs) => {
  const getFavorite = (max, item) => {
    console.log('Comparing: ', max, item)
    return (max.likes > item.likes)
      ? max
      : item
  }
  const { title, author, likes } = blogs.reduce(getFavorite, 0)
  return { title, author, likes }
}

const mostBlogs = (blogs) => {
  const uniqueAuthors = {}

  for (let i = 0; i < blogs.length; i++) {
    uniqueAuthors[blogs[i].author]
      ? (uniqueAuthors[blogs[i].author].blogs += 1)
      : (uniqueAuthors[blogs[i].author] = {
        author: blogs[i].author,
        blogs: 1,
      })
  }

  const sortedAuthors = Object.values(uniqueAuthors)
  return sortedAuthors.length > 0
    ? sortedAuthors.find(
      (obj) =>
        obj.blogs === Math.max(...sortedAuthors.map((obj) => obj.blogs))
    )
    : undefined
}

const mostLikes = (blogs) => {
  const uniqueAuthors = {}

  for (let i = 0; i < blogs.length; i++) {
    uniqueAuthors[blogs[i].author]
      ? (uniqueAuthors[blogs[i].author].likes += blogs[i].likes)
      : (uniqueAuthors[blogs[i].author] = {
        author: blogs[i].author,
        likes: blogs[i].likes,
      })
  }

  const sortedAuthors = Object.values(uniqueAuthors)
  return sortedAuthors.length > 0
    ? sortedAuthors.find(
      (obj) =>
        obj.likes === Math.max(...sortedAuthors.map((obj) => obj.likes))
    )
    : undefined
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }