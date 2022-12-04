document.addEventListener('DOMContentLoaded', function(){

  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    zoomingEnabled: true,
    userZoomingEnabled: false,
    userPanningEnabled: false,

    layout: {
      name: 'cose',
      fit: true,
    },

    // so we can see the ids
    style: [
      {
        selector: 'node',
        style: {
          'label': 'data(id)',
          'color': 'white',
        }
      },
      {
        selector: '.cornell',
        style: { 'line-color': 'red' }
      },
      {
        selector: '.ithaca_high_school',
        style: { 'line-color': 'maroon' }
      }
    ],

    elements: {
      nodes: [
        { data: { id: 'Matt' } },
        { data: { id: 'JR' } },
        { data: { id: 'Luke' } },
        { data: { id: 'Pat' } },
        { data: { id: 'Dan' } },
        { data: { id: 'Aidan' } },
        { data: { id: 'Alex' } },
        { data: { id: 'Mike G' } },
        { data: { id: 'Kristen' } },
        { data: { id: 'Eric' } },
        { data: { id: 'Holly' } },
        { data: { id: 'Jake' } },
        { data: { id: 'Jeff H' } },
        { data: { id: 'Landon' } },
        { data: { id: 'Kelly' } },
        { data: { id: 'Diana' } },
        { data: { id: 'Erin' } },
        { data: { id: 'Ashley' } },
        { data: { id: 'Meg' } },
        { data: { id: 'Vanessa' } },
        { data: { id: 'Stephen R' } },
        { data: { id: 'Dan F' } },
        { data: { id: 'Elle' } },
        { data: { id: 'Zev' } },
        { data: { id: 'Marty' } },
        { data: { id: 'Ryan' } },
        { data: { id: 'Christina' } },
        { data: { id: 'Julia' } },
        { data: { id: 'Olivia' } },
      ],

      edges: [
        { data: { id: 'Matt-Dan', source: 'Matt', target: 'Dan' }, classes:'ithaca_high_school' },
        { data: { id: 'Matt-Kelly', source: 'Matt', target: 'Kelly' }, classes:'chicago' },
        { data: { id: 'Matt-JR', source: 'Matt', target: 'JR' }, classes:'cornell' },
        { data: { id: 'Matt-Meg', source: 'Matt', target: 'Meg' }, classes:'ithaca_high_school' },
        { data: { id: 'Meg-Luke', source: 'Meg', target: 'Luke' }, classes:'high_point' },
        { data: { id: 'Matt-Aidan', source: 'Matt', target: 'Aidan' }, classes:'ithaca_high_school' },
        { data: { id: 'Aidan-Pat', source: 'Aidan', target: 'Pat' }, classes:'cornell_grad_school' },
        { data: { id: 'JR-Alex', source: 'JR', target: 'Alex' }, classes:'Houston ' },
        { data: { id: 'Alex-Mike G', source: 'Alex', target: 'Mike G' }, classes:'miller_coors' },
        { data: { id: 'Mike G-Ashley', source: 'Mike G', target: 'Ashley' }, classes:'denver' },
        { data: { id: 'Matt-Vanessa', source: 'Matt', target: 'Vanessa' }, classes:'cornell' },
        { data: { id: 'Vanessa-Stephen R', source: 'Vanessa', target: 'Stephen R' }, classes:'cornell' },
        { data: { id: 'Stephen R-Holly', source: 'Stephen R', target: 'Holly' }, classes:'wash_u' },
        { data: { id: 'Matt-Eric', source: 'Matt', target: 'Eric' }, classes:'cornell' },
        { data: { id: 'Matt-Kristen', source: 'Matt', target: 'Kristen' }, classes:'cornell' },
        { data: { id: 'Matt-Jeff H', source: 'Matt', target: 'Jeff H' }, classes:'ithaca_high_school' },
        { data: { id: 'Matt-Landon', source: 'Matt', target: 'Landon' }, classes:'cornell' },
        { data: { id: 'Pat-Diana', source: 'Pat', target: 'Diana' }, classes:'work' },
        { data: { id: 'JR-Jake', source: 'JR', target: 'Jake' }, classes:'work' },
        { data: { id: 'Dan-Aidan', source: 'Dan', target: 'Aidan' }, classes:'ithaca_high_school' },
        { data: { id: 'Jeff H-Dan', source: 'Jeff H', target: 'Dan' }, classes:'ithaca_high_school' },
        { data: { id: 'Pat-Erin', source: 'Pat', target: 'Erin' }, classes:'chicago' },
        { data: { id: 'Eric-Landon', source: 'Eric', target: 'Landon' }, classes:'cornell' },
        { data: { id: 'Dan F-Matt', source: 'Dan F', target: 'Matt' }, classes:'cornell' },
        { data: { id: 'Dan F-Landon', source: 'Dan F', target: 'Landon' }, classes:'cornell' },
        { data: { id: 'Dan F-JR', source: 'Dan F', target: 'JR' }, classes:'cornell' },
        { data: { id: 'Dan F-Eric', source: 'Dan F', target: 'Eric' }, classes:'cornell' },
        { data: { id: 'Eric-Kristen', source: 'Eric', target: 'Kristen' }, classes:'cornell' },
        { data: { id: 'Jeff H-Aidan', source: 'Jeff H', target: 'Aidan' }, classes:'ithaca_high_school' },
        { data: { id: 'Jake-Elle', source: 'Jake', target: 'Elle' }, classes:'new_york' },
        { data: { id: 'Pat-Zev', source: 'Pat', target: 'Zev' }, classes:'softball' },
        { data: { id: 'Pat-Marty', source: 'Pat', target: 'Marty' }, classes:'softball' },
        { data: { id: 'Pat-Christina', source: 'Pat', target: 'Christina' }, classes:'softball' },
        { data: { id: 'Pat-Julia', source: 'Pat', target: 'Julia' }, classes:'softball' },
        { data: { id: 'Marty-Ryan', source: 'Marty', target: 'Ryan' }, classes:'cousins' },
        { data: { id: 'Kristen-Dan F', source: 'Kristen', target: 'Dan F' }, classes:'cornell' },
        { data: { id: 'JR-Olivia', source: 'JR', target: 'Olivia' }, classes:'new_york' },
      ]
    },
  });

});
