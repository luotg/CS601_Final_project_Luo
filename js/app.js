const app = Vue.createApp({
    data() {
        return {
            images: [
                { src: "./images/sit.jpg", alt: "sit", description: "Shanghai Institute of Technology, 2013-2016" },
                { src: "./images/cmich.jpg", alt: "cmich", description: "Central Michigan University, 2016-2019" },
                { src: "./images/umich.jpg", alt: "umich", description: "University of Michigan, 2019-2021" },
                { src: "./images/bu.jpg", alt: "bu", description: "Boston University, 2022-2023" }
            ],
            currentIndex: 0,
            autoChangeInterval: null
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        }
    },
    methods: {
        nextImage() {
            if (this.currentIndex < this.images.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        },
        prevImage() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.images.length - 1;
            }
        },
        startAutoChange() {
            if (!this.autoChangeInterval) {
                this.autoChangeInterval = setInterval(() => {
                    this.nextImage();
                }, 1000);
            }
        },
        stopAutoChange() {
            clearInterval(this.autoChangeInterval);
            this.autoChangeInterval = null;
        }
    },
    mounted() {
        const imageContainer = document.querySelector('.image-container');

        if (imageContainer) {
            imageContainer.addEventListener('mouseover', this.stopAutoChange);
            imageContainer.addEventListener('mouseout', this.startAutoChange);
        }

        this.startAutoChange();
    },
    beforeDestroy() {
        const imageContainer = document.querySelector('.image-container');

        if (imageContainer) {
            imageContainer.removeEventListener('mouseover', this.stopAutoChange);
            imageContainer.removeEventListener('mouseout', this.startAutoChange);
        }

        this.stopAutoChange();
    }
});

app.mount("#app");