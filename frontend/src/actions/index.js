export const NEW_POST = 'NEW_POST'
export const NEW_COMMENT = 'NEW_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const GET_CATEGORIES = 'GET_CATEGORIES'

export function addNewPost ({ id,timestamp,title,body,author,category }) {
  return {
    type: NEW_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
  }
}

export function deletePost ({ id }) {
  return {
    type: DELETE_POST,
    id
  }
}


export function getCategories ({ category }) {
    return {
      type: GET_CATEGORIES,
      category
    }
  }