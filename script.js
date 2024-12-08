let blogMaster = document.getElementById('blogMaster')
let reviewMaster = document.getElementById('review')
let rightarrow = document.getElementById('right')
let leftarrow = document.getElementById('left')
let login  = document.getElementById("login")
let signup = document.getElementById("signup")

const points = [
    {
        "title": "Excel",
        "description": "Excel is a powerful spreadsheet tool used for data analysis, calculations, and visualization. This course covers formulas, data manipulation, and visualization techniques to maximize productivity and insights.",
        "slug": "excel"
    },
    {
        "title": "MySQL",
        "description": "MySQL is a popular relational database management system. In this course, you will learn how to design databases, query data with SQL, and optimize database performance.",
        "slug": "mysql"
    },
    {
        "title": "NumPy",
        "description": "NumPy is a library for numerical computing in Python. This course teaches you how to use NumPy arrays, perform mathematical operations, and work with multidimensional data for scientific computing.",
        "slug": "numpy"
    },
    {
        "title": "Pandas",
        "description": "Pandas is a data manipulation and analysis library for Python. In this course, you will learn how to clean, manipulate, and analyze data efficiently using DataFrames and Series.",
        "slug": "pandas"
    },
    {
        "title": "Matplotlib",
        "description": "Matplotlib is a Python library used for creating static, animated, and interactive visualizations. This course covers how to create different types of plots, customize charts, and visualize data effectively.",
        "slug": "matplotlib"
    },
    {
        "title": "Power BI",
        "description": "Power BI is a business analytics tool that allows users to visualize data and share insights. This course focuses on how to connect to data sources, create dashboards, and share interactive reports.",
        "slug": "power-bi"
    },
    {
        "title": "Tableau",
        "description": "Tableau is a data visualization tool used to transform raw data into interactive visualizations. This course will teach you how to build charts, dashboards, and stories for better data interpretation.",
        "slug": "tableau"
    },
    {
        "title": "Jupyter",
        "description": "Jupyter is an open-source tool that allows you to create and share documents containing live code, equations, and visualizations. This course will help you get comfortable with writing and executing Python code in Jupyter Notebooks.",
        "slug": "jupyter"
    }
];



const blogCard = () => {
    let x = points.map((data) => {
        let singleBlog =
            `<div class="w-full max-w-sm lg:h-56 md:h-64 px-6 py-6 border border-slate-700 m-3 rounded-md flex flex-col justify-between">
            <div>
                <h1 class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent px-5 py-2 rounded hover:bg-gray-300 text-2xl transition">${data.title}</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">${data.description}</p>
            </div>
        </div>`
        let div = document.createElement('div');
        div.innerHTML = singleBlog;
        blogMaster.appendChild(div);
    })
}


blogCard()



const review = [
    {
        "username": "john doe",
        "review": "This course was an absolutely fantastic learning experience. The content was not only informative but also structured in such a way that I could easily follow along without feeling overwhelmed. Every module was clear and provided me with actionable insights. The instructor’s teaching style was engaging and approachable, which made the material even more enjoyable to go through. I truly feel like I’ve gained valuable knowledge, and I would highly recommend this course to anyone looking to further their skills in this area. It's definitely one of the best courses I’ve taken."
    },
    {
        "username": "jane smith",
        "review": "What a transformative learning experience this course provided! The lessons were not only easy to follow, but they were also extremely well-organized, making complex topics easier to digest. The explanations were clear and concise, and I really appreciated how the course included real-world examples to reinforce the concepts. The pace was just right—fast enough to keep me engaged but slow enough to allow me to absorb the material. I’ve learned so much from this course, and I would highly recommend it to anyone who wants to enhance their skills in this field."
    },
    {
        "username": "mark taylor",
        "review": "This course had a lot of valuable content, and I truly appreciate the depth of knowledge it covered. The material was mostly solid, though there were a few sections where I felt the pacing was a little slow. While I understand that the goal is to ensure thorough understanding, I believe a slightly faster pace would have been better for keeping the momentum going. Nevertheless, the course content itself was well thought out, and the instructor’s approach to explaining concepts was helpful. I still learned a lot and feel much more confident in the subject."
    },
    {
        "username": "emily jones",
        "review": "This course exceeded my expectations in every way. From the very first lesson to the last, I found myself completely immersed in the material. The content was not only practical but also extremely relevant to my current work. The practical examples and case studies included throughout the course were invaluable, and I’ve already started applying what I learned in real-world situations. The instructor did a phenomenal job of breaking down complex concepts into manageable pieces, making it easier for me to understand and implement the material."
    },
    {
        "username": "david brown",
        "review": "I found this course to be very well organized and thorough. The material was comprehensive, and the explanations were clear. I especially appreciated how the instructor went over the details in each module, ensuring that every topic was fully covered. However, I do think the quizzes could have been a bit more challenging. They were helpful for reviewing the material, but I didn’t find them to be difficult enough to truly test my knowledge. That said, I still feel like I gained a lot from this course, and I would definitely recommend it to others looking to learn in this area."
    },
    {
        "username": "sara wilson",
        "review": "I absolutely loved this course! From start to finish, it kept me engaged with its clear and concise teaching. The instructor was exceptional, not only in terms of presenting the material but also in making sure we stayed motivated throughout the course. I especially enjoyed the interactive elements, which helped me retain information more effectively. The course also provided great support materials, and I found them extremely helpful. I would highly recommend this course to anyone who wants to learn the subject in a structured and enjoyable way."
    },
    {
        "username": "chris miller",
        "review": "Overall, I found this course to be a solid introduction to the material. The lessons were informative and easy to follow, and the course covered a lot of ground. That being said, I feel that there could have been more real-world examples incorporated throughout the course. While the theory was great, I would have loved to see more examples showing how the concepts are applied in actual situations. Despite this, I still learned a great deal, and I now have a better understanding of the subject. I’d recommend it to anyone who is looking for a comprehensive overview."
    },
    {
        "username": "lisa anderson",
        "review": "This course was an excellent experience from start to finish. The lessons were not only easy to follow but also packed with useful information that I can directly apply to my work. The course was well-structured, and the resources provided helped to deepen my understanding of the topics. I particularly enjoyed the practical examples and exercises that reinforced what I had learned. I’m now feeling much more confident in my abilities and look forward to applying these new skills. I would definitely recommend this course to others who are serious about expanding their knowledge."
    },
    {
        "username": "michael lee",
        "review": "This course went above and beyond my expectations. The content was exceptionally well-organized, and the depth of knowledge provided was outstanding. I particularly appreciated how the course took complex topics and made them accessible and understandable. The instructor’s explanations were clear, and the pacing was perfect—challenging enough to keep me engaged but not too fast to leave me behind. I feel confident in my new skills and have already started applying them in my work. I highly recommend this course to anyone looking for an in-depth."
    },
    {
        "username": "olivia clark",
        "review": "I was really impressed with this course. It offered in-depth insights and covered a wide range of topics. However, while the material was very comprehensive, I do think there could have been more interactive exercises. The static lessons were helpful, but more interactive elements would have been great for reinforcing what I learned. That said, the course content itself was of excellent quality, and I’m leaving with a much better understanding of the subject. Overall, I would recommend this course to anyone looking for detailed, high-quality material."
    }
];



let click = 0;

const updateReview = () => {
    const reviewOne = review[click];

    if (reviewOne) {
        const reviewCard = `
<div class="flex flex-col justify-center items-center p-4 space-y-6  rounded-lg shadow-md">
    <!-- Review Text -->
    <p class="flex items-center text-center text-gray-500 lg:mx-8 text-sm lg:text-lg">
        ${reviewOne.review}
    </p>

    <!-- User Details -->
    <div class="flex flex-col items-center justify-center space-y-4">
        <!-- User Image -->
        <img class="object-cover rounded-full w-16 h-16 border-2 border-gray-300 dark:border-gray-700"
             src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
             alt="${reviewOne.username}'s profile picture">

        <!-- User Name -->
        <div class="text-center">
            <h1 class="font-semibold text-gray-800 dark:text-white text-sm lg:text-lg uppercase">
                ${reviewOne.username}
            </h1>
        </div>
    </div>
</div>

      `;

        reviewMaster.innerHTML = '';

        let div = document.createElement('div');
        div.innerHTML = reviewCard;
        reviewMaster.appendChild(div);
    }
};

rightarrow.addEventListener('click', () => {
    click++;
    if (click >= review.length) {
        click = 0;
    }
    updateReview();
});

leftarrow.addEventListener("click", () => {
    click--;
    if (click < 0) {
        click = review.length
    }
    updateReview();
})


setInterval(() => {
    click++
    if (click >= review.length) {
        click = 0
    }
    updateReview()
}, 3000);


updateReview();


const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


const checkUser = () => {
    let token = localStorage.getItem("userDetails")
    let token1 = JSON.parse(token)
    console.log(token1.username)

    if(!token1){
        window.location.href = "/login.html";
    }else{
        signup.innerText = token1.username
    }
}
checkUser()

const logout = () => {
    checkUser();
    login.innerText = "Logout";
    login.setAttribute("href", "/login.html"); 
};

login.addEventListener("click", ()=>{
    localStorage.removeItem("userDetails")
})

logout()