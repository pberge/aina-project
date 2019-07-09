<template>
  <div class="news-table" :class="{'no-events': showDeleteModal}">
    <table>
      <tr>
        <th>Títol</th>
        <th>Publicada</th>
        <th>Data creació</th>
        <th>Accions</th>
      </tr>
      <tr v-for="(item, i) in news" :key="i">
        <td>{{item.title}}</td>
        <td>{{item.published}}</td>
        <td>{{item.creationdate}}</td>
        <td>
          <router-link :to="'news/'+item.id">
            <span class="icon material-icons">search</span>
          </router-link>
          <span class="icon icon-delete material-icons" @click="openDeleteModal(item)">delete</span>
        </td>
      </tr>
    </table>
    <Modal
      v-if="showDeleteModal"
      :title = modalTitle
      :text = modalText
      @action = modalAction
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import NewModel from '../../../shared/models/NewModel'
import Modal from '../../../shared/components/Modal.vue'

@Component({
  components: {
    Modal
  },
})
export default class NewsTable extends Vue {
  @Prop() news!: NewModel[]

  showDeleteModal: boolean = false
  selectedItem!: NewModel
  modalTitle: string = "Borrar article"
  modalText: string = "Està segur que vol borrar aquest article?"

  openDeleteModal(item: NewModel) {
    this.showDeleteModal = true
    this.selectedItem = item
  }

  async modalAction(res: string) {
    if(res === "ok") this.$emit('deleteNew', this.selectedItem.id)
    this.showDeleteModal = false
  }

}
</script>

<style scoped>
.news-table {
  margin-top: 2em;
}

table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding: 0.8em;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

.icon {
  padding: 0 0.5em;
  cursor: pointer;
  color: #2c3e50;
}

.icon-delete:hover {
  color: #b03131b8 !important;
}

.icon:hover {
  color: #4CAF50;
}
</style>
