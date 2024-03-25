import mongoose from '../src/db/mongoose.js'
import Task from '../src/models/task.js'



// Task.findByIdAndDelete('61c7dad87a1f8f301c689a53')
//    .then(() => {
//       return Task.countDocuments({ completed: false })
//    })
//    .then((count) => {
//       console.log(count)
//    })
//    .catch((e) => {
//       console.log(e)
//    })

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed: false})
  return count
}

deleteTaskAndCount('61c80a619035e90124bcbb52').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})
  