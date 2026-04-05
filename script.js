// Дождаться полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== ДАННЫЕ ГАЛЕРЕИ (фото, видео, заголовки и истории) ==========
    const galleryData = [
        { type: "image", img: "images/zags.jpg", title: "✨ «Минута до \"да\"»", story: "Мы стояли перед самым важным шагом, и в твоих глазах я видел всё: волнение, счастье и немножко магии. Твоя рука чуть дрожала в моей, а я просто не мог перестать улыбаться. Эта секунда длилась вечность — и она была прекрасна." },
        { type: "image", img: "images/vpole.jpg", title: "🌾 Поле, мы и тишина", story: "Твой любимый колодец, высокие травы и наше отражение в объективе. Ты смеёшься, я ловлю этот миг. Таким я хочу помнить нас всегда — счастливыми, лёгкими и немного волшебными." },
        { type: "image", img: "images/vupsipups.jpg", title: "🐞 Две половинки озорства", story: "Тот самый кадр, где мы случайно стали похожи на героев \"Лунтика\". Говорят, любовь делает нас лучше. А ещё — иногда превращает в самых милых вупсеней и пупсеней на свете." },
        { type: "image", img: "images/IMG_20250915_151533_572.jpg", title: "🍃 Тот самый деревенский день", story: "Ясное небо, свежая зелень, двор полный друзей. Мы готовим кальян, накрываем стол, кто-то уже открывает холодное. Второй день свадьбы — без суеты, но с таким теплом, которое я запомню навсегда. Ты смеёшься, и мне больше ничего не нужно." },
        { type: "image", img: "images/workvibe.jpg", title: "🍷 Магия уютных будней", story: "Твой рабочий уголок: картины на стенах, мягкий свет гирлянд, бокал вина под рукой. Ты сидишь на диване с ноутбуком, а вокруг столько тепла, что хочется просто сидеть рядом и ничего не менять. Это наш способ превращать обычный день в искусство." },
        { type: "image", img: "images/IMG_20260110_095058.jpg", title: "❤️ Знакомство с твоим миром", story: "Машина мягко качает, за окном пейзажи сменяют друг друга. Мы сидим на заднем сиденье, нарядные и немного торжественные. Ты показываешь мне поворот, потом ещё один. Я чувствую, как это важно для тебя. И для меня." },
        { type: "image", img: "images/IMG_20260124_180027.jpg", title: "🧥 История одного упрямства", story: "Ты меряешь шубку и кепку. Вердикт: «Фу, не нравится». Мы с мамой в голос: «Идёт же!» Ты стоишь, смотришь в зеркало, крутишься — и снова «нет». В итоге шубку ты всё-таки взяла (и носила шикарно). А кепка перекочевала ко мне. До сих пор моя любимая. И каждый раз, надевая её, вспоминаю этот день." },
        { type: "image", img: "images/IMG_20260110_152243.jpg", title: "👶 Наша примерка счастья", story: "Ты держишь на руках маленькую племянницу. Светишься вся. В этот день мы словно примерили роль родителей — и она тебе так идёт. У нас пока не получилось самим, но глядя на это фото, я знаю: всё будет. Обязательно. И ты будешь самой счастливой мамой." },
        { type: "image", img: "images/IMG_20260110_152649.jpg", title: "🖐️ Маленькая рука, большая мечта", story: "Тот же день, та же малышка. Только теперь я держу её крошечную ручку. Она такая тёплая и такая хрупкая. Мы тогда словно по очереди примеряли на себя это счастье. Ты — держа на руках, я — держа за руку. Наше время придёт. А пока эта ручка — как обещание." },
        { type: "image", img: "images/IMG_20251228_215039.jpg", title: "🧑‍🍳 Две подруги, один пирог", story: "Яблочный пирог, который испекли ты и Таня. В тот день мы впервые пошли в гости к друзьям (до этого они всегда были у нас). Вы так увлеклись процессом, что я понял: родилась новая дружба. И очень вкусная." },
        { type: "image", img: "images/IMG_20260103_123810.jpg", title: "❄️ Наша первая зима", story: "Снег укрыл участок, теплица и сарай припорошены, голубоватое небо сверху. И это лысое дерево с красными ягодами калины — как единственное яркое пятно. Это наша первая зима вместе. Всё тогда было новым, немного сказочным и очень уютным. Я смотрю на это фото и снова чувствую тот холодный, но тёплый внутри январь." },
        { type: "image", img: "images/firstflovers.jpg", title: "🌷 Самый дорогой букет", story: "День влюбленных. Пять жалких тюльпанов. А ты сияешь. Я тогда был первым твоим любимым, кто подарил цветы. И первым мужем. Этот маленький букет — как старт нашей большой истории. Смотри, как далеко мы зашли." },
        { type: "image", img: "images/IMG_20260306_182353.jpg", title: "🎁 Прогресс налицо", story: "Сравни с прошлым фото: тут тюльпанов явно больше. Я учусь! Но главное не изменилось — твоя радостная улыбка. Ты снова сияешь, как в тот раз, когда я пришёл с пятью хлипкими цветочками. Спасибо, что всегда так искренне радуешься. Это моя главная награда." },
        { type: "image", img: "images/jokers.jpg", title: "🤪 Бодуна не было, но фото осталось", story: "Выглядим как после трёх дней вечеринки. На самом деле — просто дурачились с масками. Это фото — лучшее доказательство того, что с тобой даже страшное становится смешным. Люблю нас таких." },
        { type: "image", img: "images/IMG_20260109_160521.jpg", title: "🪡 Жертва моды", story: "Платье снято прямо с манекена. Он остался голый и с платком. Выглядит жутковато, но очень смешно. Главное — тёще платье очень понравилось! А мы получили не только благодарность, но и это забавное фото." },
        { type: "image", img: "images/joke.jpg", title: "⛄ Снежное хулиганство", story: "Мы в гостях у твоих родителей. Погода — сказка: ясно, солнечно, почти весна. А мы решили пошалить. Ты лепишь снежки, я их складываю. Итог: куча снежков, забитый мангал, папа в шоке. Спасибо тебе за умение превращать обычный день в приключение. И за то, что ты — главный инициатор нашего безбашенства." },
        { type: "image", img: "images/fashion.jpg", title: "🦺 Новый тренд от Динары", story: "Коллекция «Гамаши-топ». Сезон — круглый год. Оценка мамы — шок. Моя оценка — 10 из 10 за креатив. Твоя выходка — в копилку наших семейных историй. Люблю тебя даже в таком образе." },
        { type: "image", img: "images/IMG_20251027_203837_451.jpg", title: "😴 Спящий агрессор", story: "Я сплю, моя рука — на твоём лице. Ты не злишься. Достаёшь телефон и делаешь селфи. Вот что значит настоящая любовь. Даже во сне я к тебе лезу. А ты терпишь и улыбаешься. Лучшее утреннее фото." },
        { type: "image", img: "images/IMG_20251226_005009.jpg", title: "🕯️ Магия в действии", story: "На этом фото нет цвета. Но есть свет — от свечей, от тебя. Ты только что закончила диагностику и отливку, теперь объясняешь подруге. Я люблю смотреть на тебя в такие минуты. Ты преображаешься. Становишься глубже, тише, увереннее. Это не работа. Это твоя природа. И я счастлив, что ты делишь её со мной. Даже если я не всегда всё понимаю." },
        { type: "image", img: "images/IMG_20260124_202846.jpg", title: "🌆 Искры между нами", story: "Вечер. Стерлитамак. Огни. Ты целуешь меня. Я улыбаюсь. Всё остальное — просто фон. Потому что главное в этом кадре — мы. И наша любовь, которая светит ярче любого СитиМолла." },
        { type: "image", img: "images/photo.jpg", title: "🎧 Запись природы. Версия с пакетом", story: "Ты: пытаешься записать пение птиц. Я: хожу и шуршу пакетом. Ты: палец к губам «цыц». Я: не понимаю, продолжаю шуршать. Результат: на видео — природа и мой пакет. Это фото — лучшее доказательство того, что я твоя главная помеха. И ты меня всё равно любишь. Спасибо за терпение." },
        { type: "image", img: "images/IMG_20260103_152323.jpg", title: "👀 Подсматриваю сквозь пальцы", story: "Едем в машине, я не помню куда. А ты сидишь рядом, прикрываешь лицо ладонью и подглядываешь сквозь пальцы. Как будто играешь со мной. Как будто проверяешь, смотрю ли я. Смотрю. Всегда смотрю. Даже когда ты прячешься. Это фото — про твою загадочность. Ты любишь быть не до конца открытой. А я люблю разгадывать. Даже когда ты просто закрываешь лицо и улыбаешься в ладошку." },
        { type: "image", img: "images/love.jpg", title: "🌱 Отражение нежности", story: "Два силуэта, один поцелуй, весеннее солнце. Нас не разглядеть, но всё понятно без слов. Это мы. Навсегда." },
        { type: "image", img: "images/IMG_20251114_122622_256.jpg", title: "👵👴 Мы через много лет", story: "Снова снапчат, снова маски. Теперь мы — бабушка и дедушка. Морщинистые, седые, чуть смешные. Но посмотри: мы всё так же рядом. Всё так же смотрим в одну сторону. Это фото — как взгляд в будущее. Я хочу дожить с тобой до такой старости. Чтобы мы так же сидели рядом, дурачились и строили рожицы. Наше время ещё впереди. Но этот кадр — обещание. Что мы будем смеяться и в 80." },
        
        // ========== ВИДЕО (вертикальный формат) ==========
        { type: "video", src: "videos/winter_sledding.mp4", poster: "images/sledding_preview.jpg", title: "🛷 Зимняя прогулка | Санки, снег и наши смешинки", story: "Тот самый зимний день! Мы с Данилом везли вас с Таней на санках, снег искрился, а вокруг было столько счастья. А потом ты решилась — съехала с высокой горки, которую так боялась. Я так гордился тобой в тот момент! Это видео — про нашу смелость, про дружбу и про то, как мы умеем радоваться даже морозным днём. ❄️" }
    ];

    // ========== ОТРИСОВКА СЕТКИ ГАЛЕРЕИ ==========
    const galleryContainer = document.getElementById('galleryList');
    
    function renderGallery() {
        if (!galleryContainer) return;
        galleryContainer.innerHTML = '';
        galleryData.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'gallery-grid-item';
            div.setAttribute('data-index', index);
            div.style.position = 'relative';
            div.style.cursor = 'pointer';
            
            if (item.type === 'video') {
                const posterImg = document.createElement('img');
                posterImg.src = item.poster || item.src;
                posterImg.alt = item.title;
                posterImg.style.width = '100%';
                posterImg.style.aspectRatio = '1 / 1';
                posterImg.style.objectFit = 'cover';
                posterImg.style.display = 'block';
                
                const playIcon = document.createElement('div');
                playIcon.className = 'video-play-icon';
                playIcon.innerHTML = '<i class="fas fa-play-circle"></i>';
                playIcon.style.position = 'absolute';
                playIcon.style.top = '50%';
                playIcon.style.left = '50%';
                playIcon.style.transform = 'translate(-50%, -50%)';
                playIcon.style.fontSize = '3rem';
                playIcon.style.color = 'white';
                playIcon.style.textShadow = '0 2px 10px rgba(0,0,0,0.5)';
                playIcon.style.pointerEvents = 'none';
                
                div.appendChild(posterImg);
                div.appendChild(playIcon);
            } else {
                const img = document.createElement('img');
                img.src = item.img;
                img.alt = item.title;
                img.loading = 'lazy';
                img.style.width = '100%';
                img.style.aspectRatio = '1 / 1';
                img.style.objectFit = 'cover';
                div.appendChild(img);
            }
            
            galleryContainer.appendChild(div);
        });
    }
    
    renderGallery();

    // ========== МОДАЛЬНОЕ ОКНО ДЛЯ ПРОСМОТРА ФОТО/ВИДЕО ==========
    const photoModal = document.getElementById('photoModal');
    const modalMediaContainer = document.getElementById('modalMediaContainer');
    const modalPhotoTitle = document.getElementById('modalPhotoTitle');
    const modalPhotoStory = document.getElementById('modalPhotoStory');
    const closePhotoModal = document.querySelector('.close-photo-modal');
    
    function openMediaModal(index) {
        const data = galleryData[index];
        if (!data || !photoModal || !modalMediaContainer) return;
        
        modalMediaContainer.innerHTML = '';
        
        if (data.type === 'video') {
            const video = document.createElement('video');
            video.src = data.src;
            video.controls = true;
            video.autoplay = false;
            video.playsInline = true;
            if (data.poster) video.poster = data.poster;
            
            video.style.maxWidth = '100%';
            video.style.maxHeight = '70vh';
            video.style.width = 'auto';
            video.style.height = 'auto';
            video.style.borderRadius = '16px';
            video.style.display = 'block';
            video.style.margin = '0 auto';
            
            modalMediaContainer.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = data.img;
            img.alt = data.title;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '70vh';
            img.style.objectFit = 'contain';
            img.style.borderRadius = '16px';
            img.style.display = 'block';
            img.style.margin = '0 auto';
            modalMediaContainer.appendChild(img);
        }
        
        modalPhotoTitle.textContent = data.title;
        modalPhotoStory.textContent = data.story;
        photoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closePhotoModalFunc() {
        if (photoModal) {
            photoModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (modalMediaContainer) {
                const video = modalMediaContainer.querySelector('video');
                if (video) video.pause();
            }
        }
    }
    
    if (closePhotoModal) {
        closePhotoModal.addEventListener('click', closePhotoModalFunc);
    }
    
    if (galleryContainer) {
        galleryContainer.addEventListener('click', function(e) {
            const item = e.target.closest('.gallery-grid-item');
            if (item) {
                const idx = item.getAttribute('data-index');
                if (idx !== null) openMediaModal(parseInt(idx));
            }
        });
    }

    // ========== МОДАЛЬНОЕ ОКНО ГАЛЕРЕИ ==========
    const modal = document.getElementById('galleryModal');
    const openBtn = document.getElementById('openGalleryBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    
    if (openBtn && modal) {
        openBtn.onclick = function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        };
    }
    
    if (closeBtn && modal) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }
    
    // ========== МОДАЛЬНОЕ ОКНО ДЛЯ ПРИЗНАНИЙ ==========
    const confessionModal = document.getElementById('confessionModal');
    const openConfessionBtn = document.getElementById('openConfessionBtn');
    const closeConfessionBtn = document.getElementById('closeConfessionBtn');
    
    if (openConfessionBtn && confessionModal) {
        openConfessionBtn.onclick = function() {
            confessionModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        };
    }
    
    if (closeConfessionBtn && confessionModal) {
        closeConfessionBtn.onclick = function() {
            confessionModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }
    
    // ========== ЗАКРЫТИЕ МОДАЛЬНЫХ ОКОН ПО КЛИКУ ВНЕ ==========
    window.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === confessionModal) {
            confessionModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === photoModal) {
            closePhotoModalFunc();
        }
    };
    
    // ========== АУДИО ПЛЕЕР ==========
    const audio = document.getElementById('loveSong');
    const playBtn = document.getElementById('playPauseBtn');
    const icon = playBtn ? playBtn.querySelector('i') : null;
    
    function updatePlayIcon() {
        if (!icon) return;
        if (audio.paused) {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        } else {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        }
    }
    
    if (playBtn && audio) {
        playBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play().catch(function(e) {
                    console.log("Автовоспроизведение заблокировано браузером");
                });
            } else {
                audio.pause();
            }
            updatePlayIcon();
        });
    }
    
    if (audio) {
        audio.addEventListener('ended', function() {
            updatePlayIcon();
        });
    }
    
    // ========== ЗАГАДКА ==========
    const riddleBlock = document.getElementById('riddleCard');
    const answerDiv = document.getElementById('riddleAnswer');
    
    if (riddleBlock && answerDiv) {
        answerDiv.style.display = 'none';
        
        riddleBlock.addEventListener('click', function() {
            if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
                answerDiv.style.display = 'inline-block';
                answerDiv.style.animation = 'none';
                setTimeout(function() {
                    answerDiv.style.animation = 'fadeIn 0.5s ease';
                }, 10);
            } else {
                answerDiv.style.display = 'none';
            }
        });
    }
    
    // ========== ПЛАВНОЕ ПОЯВЛЕНИЕ ==========
    const fadeElements = document.querySelectorAll('.story-item, .love-letter, .riddle-card');
    
    function checkFadeIn() {
        fadeElements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    fadeElements.forEach(function(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('load', checkFadeIn);
    window.addEventListener('scroll', checkFadeIn);
    
    // ========== ЭФФЕКТЫ ДЛЯ ПОЛАРОИД ==========
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(function(polaroid) {
        polaroid.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
        });
    });
    
    console.log("✨ Сайт для моей колдуньи загружен! ✨");
    console.log("💡 Видео с санками (вертикальный формат) добавлено в галерею!");
});