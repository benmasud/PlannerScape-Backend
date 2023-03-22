import{check}from"express-validator";

export const registerRules = [
    check("name", "Name is Required").notEmpty().trim().escape(),
    check("email", "Please give valid Email").isEmail().normalizeEmail(),
    check("age", "Age is required").notEmpty().trim().escape().isNumeric(),

]

export const loginRules =[
    check("email", "Please give valid Email").isEmail().normalizeEmail(),
    check("password", "Password should be 8 or more characters").isLength({min:8}),

]

export const updateDetailsRules = [
    check("name", "Name is Required").notEmpty().trim().escape(),
    check("email", "Please give valid Email").isEmail().normalizeEmail(),
    check("age", "Age is required").notEmpty().trim().escape().isNumeric(),

]

export const updatePasswordRules=[
    check("password", "Password should be 8 or more characters").isLength({min:8}),
    check("newPassword", "Password should be 8 or more characters").isLength({min:8}),
]

export const  createTodoRules=[
    check("title", "Title is required").notEmpty().trim().escape(),
]

export const  updateTodoRules=[
    check("title", "Title is required").notEmpty().trim().escape(),
    check("completed", "completed is required ").notEmpty().trim().escape().isBoolean(),

]