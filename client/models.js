import uR from 'unrest.io'

const { Model, StorageManager, Int } = uR.db

class MyModel extends Model {
  static slug = "client.MyModel" // app_name.model_name
  static fields = {
    id: Int(0),
    name: String(),
  }
  __str__() {
    return this.name
  }
}

new StorageManager(MyModel)

export default {
  MyModel
}