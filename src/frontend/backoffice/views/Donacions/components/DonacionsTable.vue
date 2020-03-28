<template>
  <div class="donacions-table" :class="{'no-events': showDeleteModal}">
    <table>
      <tr>
        <th>Colaborador</th>
        <th>Esport</th>
        <th>Objecte</th>
        <th>Accions</th>
      </tr>
      <tr v-for="(item, i) in donacions" :key="i">
        <td>{{item.nomColaborador}}</td>
        <td>{{item.esportColaborador}}</td>
        <td>{{item.descripcio}}</td>
        <td>
          <!--<router-link :to="'donacio-detail/'+item.id">
            <span class="icon material-icons">search</span>
          </router-link>-->
          <!--<router-link :to="'edit-donacio/'+item.id">
            <span class="icon material-icons">edit</span>
          </router-link>-->
          <span class="icon icon-delete material-icons" @click="openDonacioModal(item)">delete</span>
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
import { Component, Vue, Prop } from 'vue-property-decorator'
import DonacioModel from '../../../shared/models/DonacioModel'
import Modal from '../../../shared/components/Modal.vue'

@Component({
  components: {
    Modal
  }
})
export default class DonacionsTable extends Vue {
  @Prop() donacions!: DonacioModel[]

  showDeleteModal: boolean = false
  selectedItem!: DonacioModel
  modalTitle: string = 'Borrar objecte'
  modalText: string = 'Està segur que vol borrar aquest objecte?'

  openDonacioModal (item: DonacioModel) {
    this.showDeleteModal = true
    this.selectedItem = item
  }

  async modalAction (res: string) {
    if (res === 'ok') this.$emit('deleteDonacio', this.selectedItem.id)
    this.showDeleteModal = false
  }
}
</script>

<style scoped>
.donacions-table {
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

table tr:nth-child(even) { background-color: #f2f2f2; }

table tr:hover { background-color: #ddd; }

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
