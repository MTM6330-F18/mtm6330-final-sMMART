function on () {
  document.getElementById('overlay').style.display = 'block'
}

function off () {
  document.getElementById('overlay').style.display = 'none'
}

const $client = document.getElementById('client-side')
const $video = document.getElementById('video')
const $uxd = document.getElementById('uxd')
const $heading = document.getElementById('heading')
const $overview = document.getElementById('overviewText')

$client.addEventListener('click', () => {
  pool.selected = $client.dataset.course
  console.log($client.dataset.course)
  $heading.innerText = pool.selected
  $overview.innerText = web.overview
})

$video.addEventListener('click', () => {
  pool.selected = $video.dataset.course
  console.log($video.dataset.course)
  $heading.innerText = pool.selected
})

$uxd.addEventListener('click', () => {
  pool.selected = $uxd.dataset.course
  console.log($uxd.dataset.course)
  $heading.innerText = pool.selected
})

const pool = {
  selected: ''
}

const web = {
  overview:
    'JavaScript is one of the most widely used programming languages in the world and is the script language of the web. This course is an introduction to JavaScript and programming. It is the goal of this course to instill good programming techniques and habits and encourage that anyone can learn to program.\n\nCourse Topics\nBelow you will find a list of topics that will be cover throughout the course.\n<ul><li>Development Tools</li><li>Variables</li><li>Objects and Arrays</li><li>Loops</li><li>Functions</li><li>Conditional Statements</li><li>Functional Programming</li><li>CSS Flexbox</li><li>CSS Transform</li><li>Document Object Model</li></ul>',
  professor: '',
  expect: ''
}

const text = [
  'Students learn the full video production lifecycle, from planning and pre-production to editing and post-production. Video and audio technology and tools are introduced, building on the techniques and best practices developed through DSLR photography. Students practice working through pre-production and production of both video and audio, ensuring the best quality result when transitioning to post-production to limit the amount of correction needed during the editing process.',
  'Going beyond the basics of creating graphics and user interfaces, students focus on how interfaces need to react to user expectations. Students apply previously learned best practices for designing effective interfaces that allow improved workflow while integrating lessons learned by gathering user feedback and usability data. Practical and effective planning for user interfaces is introduced.\n\nWhen you have earned credit for this course, you will have demonstrated the ability to:\n<ol><li>Plan and develop interfaces. Analyze user requirements and create personas and usage scenes. Sketch thumbnails for design. Make use of wireframes for outlining website design. Create basic prototypes. Create interactive prototypes that reflect good user experience practices and theories.</li><li>Implement various levels of user experience design. Choose appropriate design principles and patterns. Apply fitting user experience trends. Create a suitable information hierarchy for better user experience.</li><li>Conduct user research to determine effectiveness and adjustments. Product and data analysis Usability testing.</li><li>Develop and manage plans for media-rich based projects. Research and develop a user-based plan for media. Evaluate and analyze various target audiences.</li></ol>\n\nMark Break Down:<ul><li>In-Class Exercises: 10%\n\t10 @ 1% each</li><li>Take Home Exercises: 30%\n\t5 @ 6% each</li><li>Assignments: 60%\n\t3 @ 20% each</li></ul>'
]
