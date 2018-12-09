function on() {
  document.getElementById('overlay').style.display = 'block'
}

function off() {
  document.getElementById('overlay').style.display = 'none'
}

const $overlay = document.getElementById('overlay')
const $client = document.getElementById('client-side')
const $video = document.getElementById('video')
const $uxd = document.getElementById('uxd')
const $heading = document.getElementById('heading')
const $overview = document.getElementById('overviewText')
const $professor = document.getElementById('professor')

$client.addEventListener('click', () => {
  pool.selected = $client.dataset.course
  console.log($client.dataset.course)
  $heading.innerText = pool.selected
  $overview.innerHTML = web.overview
  $professor.innerHTML = web.professor
  $overlay.style.backgroundColor = '#033f67'
})

$video.addEventListener('click', () => {
  pool.selected = $video.dataset.course
  console.log($video.dataset.course)
  $heading.innerText = pool.selected
  $overview.innerHTML = video.overview
  $professor.innerHTML = video.professor
  $overlay.style.backgroundColor = '#d8881f'
})

$uxd.addEventListener('click', () => {
  pool.selected = $uxd.dataset.course
  console.log($uxd.dataset.course)
  $heading.innerText = pool.selected
  $overview.innerHTML = ux.overview
  $professor.innerHTML = ux.professor
  $overlay.style.backgroundColor = '#284322'
})

const pool = {
  selected: ''
}

const web = {
  overview:
    'JavaScript is one of the most widely used programming languages in the world and is the script language of the web. This course is an introduction to JavaScript and programming. It is the goal of this course to instill good programming techniques and habits and encourage that anyone can learn to program.<br><br>Course Topics<br>Below you will find a list of topics that will be cover throughout the course.\n<ul><li>Development Tools</li><li>Variables</li><li>Objects and Arrays</li><li>Loops</li><li>Functions</li><li>Conditional Statements</li><li>Functional Programming</li><li>CSS Flexbox</li><li>CSS Transform</li><li>Document Object Model</li><li>HTML Selectors</li><li>HTMl Elements</li><li>Creating Elements</li><li>Browser Elements</li><li>Event Listeners</li><li>Event Delegation</li><li>Web Animation</li></ul>',
  professor:
    '<p class="lead">My name is Michael Eisenbraun and I am currently a part-time professor at Algonquin College for the Interactive Media and Design program. I teach Client-Side Web Development in Level 2 and Server-Side Web Development in Level 3.</p><h2 class="featurette-heading">What inspired you to become a teacher?</h2><p class="lead">I am largely self-taught and constantly striving to learn more. The field of web design and development is ever-changing and if you don’t keep moving, you will fall behind. It is this realization that lead me to start teaching at Algonquin College in January of 2016. I have a passion for learning and it fuels my desire to share what I know with others. It has become my new passion, and my primary focus. I aim to be the best teacher I can, and it is my hope that my students will find the same spark of curiosity that changed my life all those years ago.</p><h2 class="featurette-heading">What is your background related to this course?</h2><p class="lead">I built my first web site in 1997. Although I didn’t know then, this curiosity in the emerging field of web design sent me down a 20-year long path that would forever change my life. I have over a decade of professional experience in the field of web development and design. I have worked with HTML, CSS, JavaScript, PHP and MySQL as well as many related libraries and frameworks.</p><h2 class="featurette-heading">What is your favorite thing about teaching this course?</h2><p class="lead">With  Server-Side Web Development I get show students what happened beyond the browser. Unlike HTML, CSS, and JavaScript, PHP and MySQL live on the server and together open a huge world of possibilities. I enjoy showing students all the things are possible with a Server-Side language like PHP and, with the help of a database, how many amazing applications can be created.</p>',
  expect: ''
}

const video = {
  overview:
    'Students learn the full video production lifecycle, from planning and pre-production to editing and post-production. Video and audio technology and tools are introduced, building on the techniques and best practices developed through DSLR photography. Students practice working through pre-production and production of both video and audio, ensuring the best quality result when transitioning to post-production to limit the amount of correction needed during the editing process.',
  professor:
    '<p class="lead">Christopher Paine, teaching video specific courses in the IMD and the BIT program> I have taught five different courses, all focusing on video or motion graphics</p><h2 class="featurette-heading">What inspired you to become a teacher?</h2><p class="lead">To become a teacher? The gig economy. To stay a teacher? I discovered that I,<br>1) enjoyed teaching and<br>2) was forced to push my own skills and knowledge through the teaching process.</p><h2 class="featurette-heading">What is your background related to this course?</h2><p class="lead">I have worked as a video shooter/director/producer for over 20 years.</p><h2 class="featurette-heading">What is your favorite thing about teaching this course?</h2><p class="lead">Specific to MTM6401 - Web Production - The best thing about this course is the challenge of staying on top of the web video technology. The web video landscape changes constantly and we have to be on top of it. Specific to MTM6200 and IMD2003 (BIT) - I really enjoy students discovering visual language; that shot design, framing, colour, and the juxtaposition of those shots all have meaning. When a student tells me that I have ruined TV watching for them, I feel I have done my job.</p>',
  expect: ''
}

const ux = {
  overview:
    'Going beyond the basics of creating graphics and user interfaces, students focus on how interfaces need to react to user expectations. Students apply previously learned best practices for designing effective interfaces that allow improved workflow while integrating lessons learned by gathering user feedback and usability data. Practical and effective planning for user interfaces is introduced.<br><br>When you have earned credit for this course, you will have demonstrated the ability to:<ol><li>Plan and develop interfaces. Analyze user requirements and create personas and usage scenes. Sketch thumbnails for design. Make use of wireframes for outlining website design. Create basic prototypes. Create interactive prototypes that reflect good user experience practices and theories.</li><li>Implement various levels of user experience design. Choose appropriate design principles and patterns. Apply fitting user experience trends. Create a suitable information hierarchy for better user experience.</li><li>Conduct user research to determine effectiveness and adjustments. Product and data analysis Usability testing</li><li>Develop and manage plans for media-rich based projects. Research and develop a user-based plan for media. Evaluate and analyze various target audiences.</li></ol><br>Mark Break Down:<ul><li>In-Class Exercises: 10%<li>10 @ 1% each</li></li><li>Take Home Exercises: 30%<li>5 @ 6% each</li></li><li>Assignments: 60%<li>3 @ 20% each</li></li></ul>',
  professor:
    '<p class="lead">Katie Tremblay is a web design and development consultant with experience collaborating on client projects, graphic design and layout, web publishing, video editing, programming, flash animation and project management. Katie is educated in Communications from Ottawa University and is a graduate of Interactive Multimedia at Algonquin. With an ambition to learn and teach others, Katie strives to motivate and educate students on the fast-paced field of Interactive Media Management.</p><h2 class="featurette-heading">What inspired you to become a teacher?</h2><p class=lead>Right now I am teaching 1 course, 2 sections; Design Foundations Level 1; As well as coordinating the program</p><h2 class="featurette-heading">What is your favorite thing about teaching this course?</h2><p class="lead">I have always been keen on helping people and I enjoy problem solving as well as collaboration. I like the "light bulb" moments; finally seeing students make connections and grasp the content</p>',
  expect: ''
}
