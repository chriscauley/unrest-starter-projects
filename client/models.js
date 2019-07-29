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

class TodoItem extends MyModel {
  static slug = "client.TodoItem"
  static fields = {
  }
  static editable_fieldnames = ['name',]
}

new StorageManager(TodoItem)

export default {
  MyModel,
  TodoItem
}