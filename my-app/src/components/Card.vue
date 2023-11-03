<template>
  <div className="bg-gray-800 w-11/12 mx-auto h-fit my-5 rounded-md p-5">
    <h2 className="text-gray-200 font-bold">{{ title }}</h2>
    <h3 className="text-gray-200 my-3">{{ description }}</h3>
    <div className="w-full flex justify-between flex-wrap">
      <div className="flex gap-3 items-center">
        <div className="rounded-full w-4 h-4" :style="{ backgroundColor: color }"></div>
        <h4 className="text-gray-300">{{ language }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    language: String,
    color: String
  },
};
</script>
