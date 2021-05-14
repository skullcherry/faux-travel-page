<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    :hide-default-footer="true"
    class="table"
  ></v-data-table>
</template>

<script>
export default {
  name: "EmployeesTable",
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    headers: [
      { text: "Europe", value: "europe" },
      { text: "Asia", value: "asia" },
      { text: "Africa", value: "africa" },
      { text: "Americas", value: "americas" },
      { text: "Australia", value: "australia" },
      { text: "Top destinations", value: "top-destinations" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.table::v-deep {
  > .v-data-table__wrapper > table {
    > thead > tr:last-child > th {
      color: #231f20 !important;
      background-color: #fcfcfc;
      border-bottom: none !important;
    }
    > tbody > tr {
      &:hover {
        background: none !important;
      }
      > td {
        color: #bebebe;
        background-color: #fcfcfc;
        border-bottom: none !important;
      }
    }
  }
}
</style>
