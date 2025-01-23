<script setup lang="ts">
</script>
<template>
    <div class="max-w-[1200px] mx-auto">
        <GlobalHeader />
            <nav>
                <ul>
                    <li><a href="#">Update Profile</a></li>
                    <li><a href="#">view profile</a></li>
                </ul>
            </nav>
            <slot></slot>
        <GlobalFooter />
    </div>  
</template>