var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    599: {
        slidesPerView: 3
    }
  }
});


//=================PACKAGES TOGGLE
const packagesButtons = document.querySelectorAll('.packages__buttons buttons')
const packagesTableBody = document.querySelector('.packages tbody')

const removeActiveClassFromButtons = () => {
    packagesButtons.forEach(button => {
        button.classList.remove('active')
    });
}

packagesButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClassFromButtons()
        if(button.classList.contains('Students')){
            button.classList.add('active')
            packagesTableBody.innerHTML =
                `
                    <tr>
                        <td>Regular with standard license</td>
                        <td>6 weeks</td>
                        <td>2,999</td>
                    </tr>
                    <tr>
                        <td>Regular without standard license</td>
                        <td>6 weeks</td>
                        <td>1,999</td>
                    </tr>
                    <tr>
                        <td>Regular with premium license</td>
                        <td>6 weeks</td>
                        <td>3,999</td>
                    </tr>
                    <tr>
                        <td>Regular without premium license</td>
                        <td>6 weeks</td>
                        <td>2,999</td>
                    </tr>
                    <tr>
                        <td>Express without license</td>
                        <td>6 weeks</td>
                        <td>3,599</td>
                    </tr>
                    <tr>
                        <td>Express with license</td>
                        <td>6 weeks</td>
                        <td>4,599</td>
                    </tr>
                    <tr>
                        <td>Express with standard license</td>
                        <td>6 weeks</td>
                        <td>4,999</td>
                    </tr>
                    <tr>
                        <td>Express without standard license</td>
                        <td>6 weeks</td>
                        <td>3,999</td>
                    </tr>
                    <tr>
                        <td>Express with premium license</td>
                        <td>6 weeks</td>
                        <td>5,999</td>
                    </tr>
                    <tr>
                        <td>Express without premium license</td>
                        <td>6 weeks</td>
                        <td>4,999</td>
                    </tr>
                    <tr>
                        <td>Polishing without license</td>
                        <td>2 - 4weeks</td>
                        <td>1,999</td>
                    </tr>
                    <tr>
                        <td>Polishing with license</td>
                        <td>2 - 4weeks</td>
                        <td>2,999</td>
                    </tr>
                    <tr>
                        <td>Polishing with standard license</td>
                        <td>2 - 4 weeks</td>
                        <td>2,599</td>
                    </tr>
                    <tr>
                        <td>Polishing without standard license</td>
                        <td>3 - 4 weeks</td>
                        <td>2,999</td>
                    </tr>
                    <tr>
                        <td>Polishing with standard license</td>
                        <td>4 weeks</td>
                        <td>4,999</td>
                    </tr>
                `
        } else if(button.classList.contains('License')) {
            button.classList.add('active')
            packagesTableBody.innerHTML = 
            `
                <tr>
                    <td>Regular</td>
                    <td>3 month</td>
                    <td>1,999</td>
                </tr>
                <tr>
                    <td>Express</td>
                    <td>3-4 month</td>
                    <td>2,999</td>
                </tr>
            `
        } else if(button.classList.contains('Non-Student')) {
            button.classList.add('active')
            packagesTableBody.innerHTML =
                `
                    <tr>
                        <td>Regular with standard license</td>
                        <td>6 weeks</td>
                        <td>2,999</td>
                    </tr>
                    <tr>
                        <td>Regular without standard license</td>
                        <td>6 weeks</td>
                        <td>1,999</td>
                    </tr>
                    <tr>
                        <td>Regular with premium license</td>
                        <td>6 weeks</td>
                        <td>3,999</td>
                    </tr>
                    <tr>
                        <td>Regular without premium license</td>
                        <td>6 weeks</td>
                        <td>2,999</td>
                    </tr>
                    <tr>
                        <td>Express without license</td>
                        <td>6 weeks</td>
                        <td>3,599</td>
                    </tr>
                    <tr>
                        <td>Express with license</td>
                        <td>6 weeks</td>
                        <td>4,599</td>
                    </tr>
                `
        }
    })
})