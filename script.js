
const search = document.querySelector('.search');
const countrysingers = document.querySelectorAll('.countrysingers li');

console.log("User typed", countrysingers.length)

const searchengine = e => {
  const text = e.target.value.toLowerCase();

  console.log("Kieryś gizd pisoł: ", text)

  countrysingers.forEach(el => {

      const task = el.textContent;

      if   (task.toLowerCase().indexOf(text) !== -1) {
          el.style.display = 'block'
      }    else  {
          el.style.display = 'none'
      }

  })
};

search.addEventListener('keyup', searchengine) 

countrysingers.forEach(cs => {
  name = cs.textContent
  query_name = name.toLowerCase().replace(' ', '+')
  cs.innerHTML = '<a href="https://www.youtube.com/results?search_query='+query_name+'" target="_blank">'+name+'</a>'
})