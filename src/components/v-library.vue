<template>
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col-sm-10">
          <h1>Books</h1>
          <hr>
          <br><br>
          <button type="button" class="btn btn-success btn-sm">Add Book</button>
          <br><br>
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col"> id </th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Genre</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(book,index) in LIBRARY" :key="index">
              <td > {{ book.id }} </td>
              <td>{{ book.title }}</td>
              <td>{{
                  book.authors.map((author) => {
                    return author.name + " " + author.surname;
                  }).join(", ")
                }}
              </td>
              <td>{{ book.genre.genreName }}</td>
              <td>
                <button type="button" class="btn btn-warning btn-sm" >Update</button>
                <button type="button" class="btn btn-danger btn-sm" @click="DELETE_BOOK_FROM_API(book.id, index)" >Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "v-library",
  computed: {
    ...mapGetters([
      'LIBRARY'
    ])
  },
  methods: {
    ...mapActions([
      'GET_LIBRARY_FROM_API',
        'DELETE_BOOK_FROM_API'
    ])
  },
  mounted() {
    this.GET_LIBRARY_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log(response.data);
          }
        })
  }
}
</script>

<style scoped>

</style>