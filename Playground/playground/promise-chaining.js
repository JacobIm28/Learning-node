import User from '../../task-manager/src/models/user.js'
import mongoose from '../../task-manager/src/db/mongoose.js'

// User.findByIdAndUpdate('61c7debb5a59c244083f0fea', {age: 1}).then((user) => {
//   console.log(user)
//   return User.countDocuments({age: 1})
// }).then((count) => {
//   console.log(count)
// }).catch((e) => {
//   console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {age})
  const count = await User.countDocuments({age})
  return count
}

updateAgeAndCount('61c7debb5a59c244083f0fea', 2).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})