<template>
    <div class="container">
        <section class="border-bottom pb-4 mb-5" v-for="(item) in news.slice(0,10)" :key="item.id">
            <div class="row gx-5">
            <div class="col-md-6 mb-4">
                <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                <img v-bind:src="item.urlToImage" class="img-fluid" style="height: 250px; width: 500px;"/>
                <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">News of the day</span> 
                <h4><strong>{{item.title}}</strong></h4>
                <p class="text-muted">
                {{item.description}}
                </p>
                <button type="button" class="btn btn-primary">Read more</button>
            </div>
            </div>
        </section>
         <!-- Pagination -->
        <nav class="my-4" aria-label="...">
            <ul class="pagination pagination-circle justify-content-center">
            <li class="page-item">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
            </ul>
        </nav>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                news: []
            }
        },
        mounted() {
            fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=df382590e0ef4b5898fe00612d073e6c')
            .then(response => response.json())
            .then(response => {
                this.news = response.articles
            }
            )
        }
    }
</script>