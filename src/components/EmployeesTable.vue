<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    :hide-default-footer="true"
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

<style lang="scss" scoped></style>
