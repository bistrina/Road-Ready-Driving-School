const programsMenu = document.querySelectorAll('.program')
const programDetails = document.querySelector('.programDetails')

const removeActiveClass = () => {
    programsMenu.forEach(button => {
        button.classList.remove('active')
    });
}

programsMenu.forEach(program => {
    program.addEventListener('click', () => {
        removeActiveClass()
        if(program.classList.contains('express')) {
            program.classList.add('active')
            programDetails.innerHTML = 
            `
                <div class="container programDetail">
                    <div class="programDetail_left">
                        <h2>Express Learning</h2>
                        <p>
                            Our Express Learning program is ideal for those who want to master driving skills quickly. It offers intensive sessions focusing on traffic rules, vehicle handling, parking, and road safety. With flexible schedules and expert instructors, learners gain confidence faster, making them road-ready in a shorter time without compromising on quality.
                        </p>
                        <div class="programDetail_images">
                            <div><img src="../assets/32323.jpg" alt=""></div>
                            <div><img src="../assets/graduate2.webp" alt=""></div>
                        </div>
                        <h4>Included in weekend streams</h4>
                <p>
                    Our Weekday Streams program is designed for learners with flexible weekday availability. It includes regular driving lessons, theory classes, road safety training, and practical sessions. Learners benefit from smaller batch sizes, personalized attention, and consistent practice, ensuring steady progress.
                </p>
                <article>
                    <h5>Theory Classes</h5>
                    <p>
                        Cover traffic rules, signs, and driving laws.

                        Interactive sessions for better understanding.
                    </p>
                </article>
                <article>
                    <h5>Practical Driving Lessons</h5>
                    <p>
                        Hands-on training with certified instructors.

                        Focus on vehicle control, parking, lane discipline.
                    </p>
                </article>
                <article>
                    <h5>Road Safety Training</h5>
                    <p>
                        Defensive driving techniques.

                        Safety awareness for city and highway driving.
                    </p>
                </article>
                <article>
                    <h5>Mock Driving Tests</h5>
                    <p>
                        Practice sessions to reduce exam fear.

                        Step-by-step guidance for license preparation.
                    </p>
                </article>
                <article>
                    <h5>Flexible Scheduling</h5>
                    <p>
                       Morning or evening weekday slots.

                        Designed for students and working professionals.
                    </p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get started Now</a>
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Regular Without License</h4>
                    <div>
                        <h2>$1,990</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$1,840</h2>
                        <p>For Student</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Standard License</h4>
                    <div>
                        <h2>$2,650</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$2,550</h2>
                        <p>For Student</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Premium License</h4>
                    <div>
                        <h2>$2,990</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$2,750</h2>
                        <p>For Student</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>
             ` 

            }   else if(program.classList.contains('polishing')) {
            program.classList.add('active')
            programDetails.innerHTML = `
                <div class="container programDetail">
            <div class="programDetail_left">
                <h2>Polishing</h2>
                <p>
                    Our License Program is designed to prepare learners for driving tests with confidence. It covers theory, practical sessions, road signs, and traffic regulations. Mock tests and personalized guidance help reduce exam anxiety. With experienced instructors, we ensure every learner gains the knowledge and skills required to successfully earn a driving license.
                </p>
                <div class="programDetail_images">
                    <div><img src="../assets/practical3.jpeg" alt=""></div>
                    <div><img src="../assets/practical4.jpg" alt=""></div>
                </div>
                <h4>Included in weekend streams</h4>
                <p>
                    Our Weekday Streams program is designed for learners with flexible weekday availability. It includes regular driving lessons, theory classes, road safety training, and practical sessions. Learners benefit from smaller batch sizes, personalized attention, and consistent practice, ensuring steady progress.
                </p>
                <article>
                    <h5>Theory Classes</h5>
                    <p>
                        Cover traffic rules, signs, and driving laws.

                        Interactive sessions for better understanding.
                    </p>
                </article>
                <article>
                    <h5>Practical Driving Lessons</h5>
                    <p>
                        Hands-on training with certified instructors.

                        Focus on vehicle control, parking, lane discipline.
                    </p>
                </article>
                <article>
                    <h5>Road Safety Training</h5>
                    <p>
                        Defensive driving techniques.

                        Safety awareness for city and highway driving.
                    </p>
                </article>
                <article>
                    <h5>Mock Driving Tests</h5>
                    <p>
                        Practice sessions to reduce exam fear.

                        Step-by-step guidance for license preparation.
                    </p>
                </article>
                <article>
                    <h5>Flexible Scheduling</h5>
                    <p>
                       Morning or evening weekday slots.

                        Designed for students and working professionals.
                    </p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get started Now</a>
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Regular Without License</h4>
                    <div>
                        <h2>$1,990</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$1,840</h2>
                        <p>For Student</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Standard License</h4>
                    <div>
                        <h2>$2,650</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$2,550</h2>
                        <p>For Student</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Premium License</h4>
                    <div>
                        <h2>$2,990</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$2,750</h2>
                        <p>For Student</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
            </div>
            `
        } else if(program.classList.contains('license')) {
            program.classList.add('active')
            programDetails.innerHTML = `
            <div class="container programDetail">
            <div class="programDetail_left">
                <h2>License</h2>
                <p>
                    Our License Program focuses on preparing learners to successfully clear their driving tests. It includes detailed theory sessions, practical driving practice, road sign awareness, and traffic law guidance. Learners take mock tests to build confidence and reduce exam fear. With expert instructors and personalized support, we ensure you are fully prepared to obtain your driving license.
                </p>
                <div class="programDetail_images">
                    <div><img src="../assets/practical9.avif" alt=""></div>
                    <div><img src="../assets/graduate4.jpg" alt=""></div>
                </div>
                

                <h4>Included in weekend streams</h4>
                <p>
                    Our Weekday Streams program is designed for learners with flexible weekday availability. It includes regular driving lessons, theory classes, road safety training, and practical sessions. Learners benefit from smaller batch sizes, personalized attention, and consistent practice, ensuring steady progress.
                </p>
                <article>
                    <h5>Theory Classes</h5>
                    <p>
                        Cover traffic rules, signs, and driving laws.

                        Interactive sessions for better understanding.
                    </p>
                </article>
                <article>
                    <h5>Practical Driving Lessons</h5>
                    <p>
                        Hands-on training with certified instructors.

                        Focus on vehicle control, parking, lane discipline.
                    </p>
                </article>
                <article>
                    <h5>Road Safety Training</h5>
                    <p>
                        Defensive driving techniques.

                        Safety awareness for city and highway driving.
                    </p>
                </article>
                <article>
                    <h5>Mock Driving Tests</h5>
                    <p>
                        Practice sessions to reduce exam fear.

                        Step-by-step guidance for license preparation.
                    </p>
                </article>
                <article>
                    <h5>Flexible Scheduling</h5>
                    <p>
                       Morning or evening weekday slots.

                        Designed for students and working professionals.
                    </p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get started Now</a>
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Regular Without License</h4>
                    <div>
                        <h2>$1,990</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$1,840</h2>
                        <p>For Student</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Standard License</h4>
                    <div>
                        <h2>$2,650</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$2,550</h2>
                        <p>For Student</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Premium License</h4>
                    <div>
                        <h2>$2,990</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$2,750</h2>
                        <p>For Student</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>   
        `
        } else if(program.classList.contains('regular')) {
            program.classList.add('active')
            programDetails.innerHTML = `
           <div class="container programDetail">
            <div class="programDetail_left">
                <h2>Regular Learning</h2>
                <p>
                    Our Regular Learning program is designed for beginners who want to build strong driving skills. It covers traffic rules, road signs, vehicle control, parking techniques, and safe driving practices. With theory and practical lessons, learners gain confidence, discipline, and responsibility, ensuring they become skilled, safe, and road-ready drivers for life.
                </p>
                <div class="programDetail_images">
                    <div><img src="../assets/graduate3.jpg" alt=""></div>
                    <div><img src="../assets/practical8.jpeg" alt=""></div>
                </div>

                <h4>Included in weekend streams</h4>
                <p>
                    Our Weekday Streams program is designed for learners with flexible weekday availability. It includes regular driving lessons, theory classes, road safety training, and practical sessions. Learners benefit from smaller batch sizes, personalized attention, and consistent practice, ensuring steady progress.
                </p>
                <article>
                    <h5>Theory Classes</h5>
                    <p>
                        Cover traffic rules, signs, and driving laws.

                        Interactive sessions for better understanding.
                    </p>
                </article>
                <article>
                    <h5>Practical Driving Lessons</h5>
                    <p>
                        Hands-on training with certified instructors.

                        Focus on vehicle control, parking, lane discipline.
                    </p>
                </article>
                <article>
                    <h5>Road Safety Training</h5>
                    <p>
                        Defensive driving techniques.

                        Safety awareness for city and highway driving.
                    </p>
                </article>
                <article>
                    <h5>Mock Driving Tests</h5>
                    <p>
                        Practice sessions to reduce exam fear.

                        Step-by-step guidance for license preparation.
                    </p>
                </article>
                <article>
                    <h5>Flexible Scheduling</h5>
                    <p>
                       Morning or evening weekday slots.

                        Designed for students and working professionals.
                    </p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Get started Now</a>
            </div>

            <div class="programDetail__right">
                <article>
                    <h4>Regular Without License</h4>
                    <div>
                        <h2>$1,990</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$1,840</h2>
                        <p>For Student</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Standard License</h4>
                    <div>
                        <h2>$2,650</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$2,550</h2>
                        <p>For Student</p>
                    </div>
                </article>
                <article>
                    <h4>Regular With Premium License</h4>
                    <div>
                        <h2>$2,990</h2>
                        <p>For Non Student</p>
                    </div>
                    <div>
                        <h2>$2,750</h2>
                        <p>For Student</p>
                    </div>
                    <p>License will be ready 2 weeks after completion</p>
                </article>
            </div>
        </div>
                `
        }

    })
})