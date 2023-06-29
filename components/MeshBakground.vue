<template>
    <div class="bgblur w-screen h-screen top-0 left-0 overflow-hidden">
        <div class="e1 bg-accentlight tab:bg-accentdark absolute left-[70vw] top-[10vh]" id="accentdark"></div>
        <div class="e2 bg-accentlight absolute left-[40vw] top-[20vh] hidden tab:flex" id="accentlight"></div>
        <div class="e1 bg-zinc-800 absolute left-[40vw] top-[50vh] hidden tab:flex" id="zinc800"></div>
        <div class="e2 bg-zinc-400 absolute left-[60vw] top-[45vh]" if="zinc400"></div>
    </div>
</template>

<style>
.bgblur {
    filter: blur(150px);
}

@media screen and (min-width: 786px) {
    .e1 {
        animation: float 15s infinite;
    }

    .e2 {
        animation: float 10s infinite;
    }
}

.e1 {
    width: 30vw;
    height: 30vw;
    border-radius: 384px;
}

.e2 {
    width: 20vw;
    height: 20vw;
    border-radius: 384px;
}

@keyframes float {
    0% {
        transform: translate(0px, 0px);
    }

    25% {
        transform: translate(20px, 20px);
    }

    50% {
        transform: translate(-50px, -50px);
    }

    75% {
        transform: translate(50px, 50px);
    }

    100% {
        transform: translate(0px, 0px);
    }
}
</style>