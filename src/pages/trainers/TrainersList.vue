<template>
  <section>
    <trainer-filter @change-filter="setFilters"></trainer-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isTrainer" link to="/register">Register as Trainer</base-button>
      </div>
      <ul v-if="hasTrainers">
        <trainer-item
          v-for="trainer in filteredTrainers"
          :key="trainer.id"
          :id="trainer.id"
          :first-name="trainer.firstName"
          :last-name="trainer.lastName"
          :rate="trainer.hourlyRate"
          :areas="trainer.areas"
        ></trainer-item>
      </ul>
      <h3 v-else>No trainers found.</h3>
    </base-card>
  </section>
</template>

<script>
import TrainerItem from '../../components/trainers/TrainerItem.vue';
import TrainerFilter from '../../components/trainers/TrainerFilter.vue';

export default {
  components: {
    TrainerItem,
    TrainerFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isTrainer(){
        return this.$store.getters['trainers/isTrainer']
    },
    filteredTrainers() {
      const trainers = this.$store.getters['trainers/trainers'];
      return trainers.filter((trainer) => {
        if (this.activeFilters.frontend && trainer.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && trainer.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && trainer.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasTrainers() {
      return this.$store.getters['trainers/hasTrainers'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
