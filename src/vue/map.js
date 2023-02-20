 // Группы объектов
    window.myMap = false;
    window.myObjectManager = [];
    window.myObjectManagers = [];
    window.placemarks = [];
    window.app=null;
   app = new Vue({
        el: '#app',
        data: {
            magazines: groups,
            textTop:[],
            textBottom:[],
            navInit:window.navInit
        },
        mounted () {
            
            ymaps.ready(() => {
                if (this.magazines.length) {
                    this.map_init().then(()=>{
                        this.$refs['listItem'][0].click()
                        myMap.behaviors.disable('scrollZoom');
                    }).then(()=>{
                        this.navInit()
                    })
                }
            })
        },
        methods: {
            /* Загружаем карту и расставляем метки */
             map_init: async function () {
                myMap = new ymaps.Map('map', {
                    center: [51.777996,55.182142],
                    controls:[],
                    zoom:15,
                },
                {
                        suppressMapOpenBlock: true
                    }
                );

                myObjectManager = new ymaps.ObjectManager({ clusterize: true });
                for (let i = 0, n = Object.keys(this.magazines).length; i < n; i++) {
                    var items = this.magazines[i]['features'];
                    for (let j = 0, m = Object.keys(items).length; j < m; j++) {
                        placemarks[items[j]['id']] = items[j];
                    }

                    /* Стиль для меток */
                    myObjectManager.objects.options.set({
                        iconLayout: 'default#image',
                        iconImageSize: [40, 40],
                        iconImageOffset: [-20, -40],
                        iconImageHref: '/assets/img/mark.svg'
                    });

                    /* Расставляем на карту объекты*/
                    myObjectManager.add(this.magazines[i]);
                    myMap.geoObjects.add(myObjectManager);
                    myObjectManagers[this.magazines[i]['id']] = this.magazines[i];
                };

                /* Выставляем масштаб карты чтобы были видны все группы. */
                myMap.setBounds(myMap.geoObjects.getBounds());
                // myMap.behaviors.disable('scrollZoom');
            },

            /* Поиск в категориях - обновляем метки на карте */
            mapUpdate: function (array) {
                if(myMap != false){
                    myObjectManager.removeAll();
                    for (let i = 0, n = Object.keys(array).length; i < n; i++) {
                        myObjectManager.add(myObjectManagers[array[i]['id']]);
                    }
                }

                return array
            },

            /* Поиск в адресах - обновляем метки на карте */
            mapUpdateFeature: function(array){
                if(myMap != false){
                    myObjectManager.removeAll();
                    for (let i = 0, n = Object.keys(array).length; i < n; i++) {
                        myObjectManager.objects.add(placemarks[array[i]['id']]);
                    }
                    // myMap.setBounds(myObjectManager.objects.getBounds(placemarks[array[i]['id']]));
                }
                return array
            },
            addAll: function(e){
                myMap.setBounds(myMap.geoObjects.getBounds());
                myObjectManager.objects.balloon.close();
                var links = document.querySelectorAll('.link-mag')
                    this.removeActive(links)
                    e.target.classList.add('active')
                this.clickShowMap()
            },
            removeActive:function(links){
                links.forEach((item)=>{
                  item.classList.remove('active')
               })
            },
            /* показать/скрыть коллекцию */
            showCollection: function(index){
                this.textTop = []                
                this.textBottom = []                
                var pos = index.target.attributes.rel.value;               
                this.removeActive(this.$refs['listItem'])
                index.target.classList.add('active')
                myObjectManager.removeAll();
                myObjectManager.add(myObjectManagers[pos]);
                this.textTop = [...myObjectManagers[pos].textTop]
                this.textBottom = [...myObjectManagers[pos].textBottom]
                myMap.panTo(
                       myObjectManagers[pos].features[0].geometry.coordinates).then(function () {
                       myMap.setZoom(11);
                    //    myObjectManager.objects.balloon.open(pos);
                    });
               
            },
            /* Перейти и показать описание */
            clickGoto: function(index) {
                   let pos = index.target.rel;
                   // console.log(e)
                    let links = document.querySelectorAll('.link-mag')
                      this.removeActive(links)
                       index.target.classList.add('active')
                    myMap.panTo(
                       placemarks[pos].geometry.coordinates).then(function () {
                       myMap.setZoom(15);
                       myObjectManager.objects.balloon.open(pos);
                    });

                this.clickShowMap()
            },

           
        },

    });
