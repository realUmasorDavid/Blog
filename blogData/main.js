blogData = [
    {
        "id": 1,
        "title": "The impact of technology on a workplace",
        "image": "../assets/hr.jpg",
        "category": "Tech",
        "author": "Darrell Etherington",
        "authorPic": "../assets/profile.jpg",
        "published_date": "July 3, 2024",
        "content": "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable..."
    },
    {
        "id": 2,
        "title": "Making wearable medical devices more patient-friendly",
        "image": "../assets/hr.jpg",
        "category": "Health",
        "author": "Otunba Osteriki",
        "authorPic": "../assets/profile.jpg",
        "published_date": "October 4, 2023",
        "content": "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable..."
    },
    {
        "id": 3,
        "title": "PS5 with EAFC 24 giveaway and $5000 for winner of tournament",
        "image": "../assets/hr.jpg",
        "category": "Gaming",
        "author": "Olusegun Obasanjo",
        "authorPic": "../assets/profile.jpg",
        "published_date": "December 2, 2023",
        "content": "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable..."
    }
];

const all_blog_post = document.querySelector(".all_blog_post")
const blog_links = document.querySelectorAll("li")



window.addEventListener('DOMContentLoaded', () => {
    displayBlogData(blogData)
})

blog_links.forEach((links) => {
    links.addEventListener('click',(e) => {
        const category = e.target.dataset.id
        console.log(category)
        const blogCategory = blogData.filter(function(data){
            if (data.category === category){
                return data
            }
        })
        if (category === "All"){
            console.log(blogData)
            displayBlogData(blogData)
        } else {
            displayBlogData(blogCategory)
        }
    })
})

function displayBlogData(blogs) {
    let displayData = blogs.map(function (cat_items) {
        return `<div class="mb-8">
                <img src ="${cat_items.image}" class="blog-img w-full" alt="Blog Image">
                <div class="text-overlay text-left w-full">
                    <h6 class="cat-date mt-6"><span class="text-blue-250">${cat_items.category}</span> - ${cat_items.published_date}</h6>
                    <h2 class="blog-title font-bold text-xl">${cat_items.title}</h2>
                    <p class="blog-subtitle mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos similique totam atque, voluptatum eius aut.</p>
                    <div class="profile flex items-center">
                        <img src="${cat_items.authorPic}" class="profile-pic rounded-full" alt="">
                            <div class="profile-info mx-5 text-sm">
                                <h6 class="font-bold">${cat_items.author}</h6>
                                <h6>CEO, GenZ Blog</h6>
                            </div>
                    </div>
                </div>

                </div >`
});
displayData = displayData.join("")



all_blog_post.innerHTML = displayData
}