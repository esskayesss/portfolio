<template>
  <div class="overflow-x-hidden">
    <div class="lg:hidden h-screen w-screen align-middle flex justify-center">
      <div class="m-auto text-center h-fit w-fit text-3xl max-w-[80%] font-semibold">
        <p>
          visit on a larger device
        </p>
        <p class="text-xl mt-4">
          this website is presently optimized for larger displays only.
        </p>
      </div>
    </div>
    <MeshBakground class="absolute top-0 left-0 fixed z-[-1]" />
    <NavBar class="absolute hidden lg:flex left-0 top-0 px-20 z-10" />
    <div class="hidden lg:grid grid-cols-11 grid-rows-1 h-[90vh] py-[10vh] mt-[10vh] px-20 w-screen">
      <LeftPane class="col-span-4 h-full w-fit overflow-hidden" />
      <PortfolioData class="overflow-y-scroll col-span-7 mx-auto w-full" />
      <div></div>
    </div>
  </div>
</template>