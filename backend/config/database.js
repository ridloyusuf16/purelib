import mongoose from 'mongoose'

const connectDB = () => {
  try {
    const conn = mongoose.connect('mongodb://127.0.0.1:27017/purelib')
    
    console.log('Database connected!')
  } catch {
    console.error(`Error: ${error.message}`);

    process.exit(1)
  }
}

export default connectDB