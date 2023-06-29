<template>
  <div class="overflow-x-hidden tab:max-h-screen tab:overflow-y-hidden">
    <MeshBakground class="fixed top-0 left-0 fixed z-[-1]" />
    <NavBar class="absolute tab:flex left-0 top-0 px-4 md:px-10 tab:px-14 z-10 max-h-[10vh]" />
    <div class="flex flex-col gap-16 tab:flex-row tab:h-[90vh] pt-[10vh] tab:pb-[10vh] mt-[10vh] w-screen">
      <LeftPane
        class="mx-auto w-full min-h-[80vh] tab:min-h-0 tab:max-w-[40%] min-h-full w-fit overflow-hidden leftpane py-20 tab:py-0" />
      <RightPane class="max-w-full overflow-x-hidden overflow-y-scroll mx-auto w-full px-6 rightpane" />
    </div>
  </div>
</template>

<style>
.rightpane::-webkit-scrollbar {
  width: 10px;
}

.rightpane::-webkit-scrollbar-track {
  @apply drop-shadow-2xl backdrop-grayscale;
  background: transparent;
}

.rightpane::-webkit-scrollbar-thumb {
  @apply bg-accentdark rounded-xl;
}
</style>