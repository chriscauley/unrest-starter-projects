import models from '../models'

<home-screen>
  <ul>
    <li each={item in items}>{item.name}</li>
  </ul>
  <h3>Add another</h3>
  <ur-form model={model}/>

<script>
this.model = models.TodoItem
this.on("mount",() => this.update())
this.on("update",() => {
  this.items = this.model.objects.all()
})
</script>
</home-screen>