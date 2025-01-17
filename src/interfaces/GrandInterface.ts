export interface GenericResponse<T> {
  status: number
  message: string
  data: T
}

export interface User {
  id?: string
  email: string
  password: string
  name: string
  picture: string
  created_at: string
  updated_at: string

  notifications: Notification[]
  user_class_member: UserClassMember[]
}

export interface RegisterCredentials {
  userName: string
  email: string
  password: string
}

export interface FormCreateUserTodoAnswer {
  userAssignmentTodoId: string
  answer: string
}

export interface FormCreateClass {
  classSubject: string
  classDesc: string
}

export interface RegisterResponse {
  status: number
  message: string
  data: {
    access_token: string
  }
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface LoginResponse {
  status: number
  message: string
  data: {
    access_token: string
  }
}
export interface Notification {
  id?: string
  title: string
  description: string
  created_at: string
  updated_at: string
  is_read: boolean
  user_id: string

  user: User
}

export interface Class {
  id: string
  class_code: string
  subject: string
  description: string
  created_at: string
  updated_at: string
  user_class_member?: UserClassMember[]
}

export interface UserClassMember {
  id: string
  is_teacher: boolean
  created_at: string
  updated_at: string
  class_id: string
  user_id: string
  class: Class

  // class: Class
  user: User // based on swagger, this has one-to-one relation to user
}

export interface UserAssignmentTodo {
  id: string
  created_at: string
  updated_at: string
  score: number
  is_finish: boolean

  user_id: string
  assignment_id: string
  user: User
  assignment: Assignment
}

export interface UserAssignmentTodoUpdate {
  score: number
  is_finish: boolean
  user_id: string
  assignment_id: string
}

export interface UserTodoAnswer {
  id: string
  created_at: string
  updated_at: string
  answer: string

  user_assignment_todo_id: string
  user_assignment_todo: UserAssignmentTodo
  answer_file?: AssignmentFile
}

export interface FormCreateUserClassMember {
  userId: string
  classId: string
  isTeacher: boolean
}
export interface FormUpdateUserClassMember {
  userId?: string
  classId?: string
  isTeacher?: boolean
}
export interface FormCreateUserClassMemberByCode {
  userId: string | null
  classCode: string
  isTeacher: boolean
}

export interface JoinClassByCode {
  classCode: string
}

export interface Article {
  id?: string
  title: string
  content: string
  post: Post
}

export interface FormCreateArticle {
  title: string
  content: string
}

export interface Assignment {
  id?: string
  title: string
  content: string
  due_date: string
  assignment_file?: AssignmentFile
  post: Post
}

export interface AssignmentFile {
  id: string
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  destination: string
  filename: string
  path: string
  size: number
  assignment_id: string
}

export interface FormCreateAssignment {
  title: string
  content: string
  due_date: string
}

export interface ArticleResponse {
  assignment_id: string
  assignment_file_upload: File
}

export interface Post {
  id: string
  created_at: string
  updated_at: string
  article: Article | null
  assignment: Assignment | null
  class: Class
  article_id: string | null
  class_id: string | null
  assignment_id: string
}

export interface CreatePost {
  article_id?: string
  assignment_id?: string
  class_id: string
}
export interface ChildrenProps {
  children?: React.ReactNode | React.ReactElement
}
export interface ChildrenPropsWithClassName extends ChildrenProps {
  className?: string
}

// comment
export interface CommentResponse {
  id: string
  created_at: string
  updated_at: string
  comment: string
  user_id: string
  post_id: string
  post: Post
  user: User
}
