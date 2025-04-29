export default defineEventHandler(async (event) => {
  try {
    return await MessageSchema.find({})
  }
  catch (error) {
    return error
  }
})
