<main>
  <h2>찾아오시는 길</h2>
  <div id="map" style="width:100%;height:400px">
  <div class="btn_map_icon">
    <button type="button" id="zoomIn" title="지도 확대하기">+</button>
    <button type="button" id="zoomOut" title="지도 축소하기">-</button>
  </div>
  </div>

  <div class="wrap_btn">
    <button type="button" id="searchStore" class="btn_comm">가게 찾기</button>
    <button type="button" id="shareTw" class="btn_comm">트위터로 공유하기</button>
    <button type="button" id="shareFb" class="btn_comm">페이스북으로 공유하기</button>
    <button type="button" id="shareKt" class="btn_comm">카카오톡으로 공유하기</button>
  </div>
</main>

<script>
  import { onMount } from 'svelte';

  /**
   * 카카오 맵 호출
   */
  function init() {
    const location = [37.47828789178454, 126.86053870442703]
    const extendLocation = [...location];
    const container = document.getElementById('map');
    const center = new kakao.maps.LatLng(...location);

    // 지도 생성
    let map = new kakao.maps.Map(container, { 
      center,
      level: 3
    });
    
    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: center
    })

    // 마커 위 인포 생성
    const iwContent = `
      <div style="width:150px;padding:10px 10px 8px;letter-spacing:0">
        <strong style="font-weight:bold;font-size:14px;line-height:18px;color:#1a1a1a">앙드레 옷 수선</strong>
        <p style="font-size:11px;line-height:1.6;color:#525252">경기도 광명시 광삼로 15</p>
        <div style="margin-top:0">
          <a href="https://map.kakao.com/link/map/앙드레 옷 수선,${extendLocation}" style="font-size:11px;line-height:14px;color:royalblue" target="_blank">큰 지도 보기</a>
          <span style="display:inline-block;width:8px;font-size:10px;line-height:1.9;color:#c5c5c5;vertical-align:top;text-align:center">|</span>
          <a href="https://map.kakao.com/link/to/앙드레 옷 수선,${extendLocation}" style="font-size:11px;line-height:14px;color:royalblue" target="_blank">길찾기</a>
        </div>
      </div>
    `;
    const infowindow = new kakao.maps.InfoWindow({
      position : center, 
      content : iwContent,
      removable: true
    });
    infowindow.open(map, marker)

    // 카카오톡 공유하기 버튼 초기화
    Kakao.init('e73e44e9981069fd55d94fdeca2c6f37');

    return {
      location,
      map,
      marker,
      Kakao
    }
  }
  
  function clickEvent (map, location, KakaoShare) {
    let btnSearchStore = document.querySelector('#searchStore');
    let btnZoomIn = document.querySelector('#zoomIn');
    let btnZoomOut = document.querySelector('#zoomOut');
    let btnShareTw = document.querySelector('#shareTw');
    let btnShareFb = document.querySelector('#shareFb');
    let btnShareKt = document.querySelector('#shareKt');

    // 지도 센터 부드럽게 이동
    btnSearchStore.addEventListener('click', () => {
      let moveLatLon = new kakao.maps.LatLng(...location);
      map.panTo(moveLatLon);
    })
    // 지도 확대하기
    btnZoomIn.addEventListener('click', () => {
      let level = map.getLevel();
      map.setLevel(level - 1);
    })
    // 지도 축소하기
    btnZoomOut.addEventListener('click', () => {
      let level = map.getLevel();
      map.setLevel(level + 1);
    })
    // 트위터로 공유하기
    btnShareTw.addEventListener('click', () => {
      const sendText = '앙드레 옷 수선';
      const sendUrl = 'andre13579.github.io/susun';
      window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${sendUrl}`)
    })
    // 페이스북 공유하기
    btnShareFb.addEventListener('click', () => {
      const sendUrl = 'andre13579.github.io/susun';
      window.open(`http://www.facebook.com/sharer/sharer.php?u=${sendUrl}`);
    })
    // 카카오톡 공유하기
    btnShareKt.addEventListener('click', async () => {
      try {
        KakaoShare.Link.sendDefault({
          // container: '#shareKt', // 카카오공유버튼ID
          objectType: 'feed',
          content: {
            title: "앙드레 옷 수선", // 보여질 제목
            description: "옷 수선, 계절 옷 판매 등등..", // 보여질 설명
            imageUrl: "./assets/logo_andre.png", // 콘텐츠 URL
            link: {
              mobileWebUrl: "https://andre13579.github.io/susun",
              webUrl: "https://andre13579.github.io/susun"
            }
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    })
  }
  
  onMount(() => {
    const { map, marker, location, Kakao } = init();

    clickEvent(map, location, Kakao); // 클릭 이벤트
    marker.setMap(map); // 마커 표시
  });
  
</script>

<style lang="scss">
  .map{position:relative}
  .btn_comm{
    padding:7px 20px 5px;border-radius:2px;font-weight:700;font-size:14px;line-height:20px;background-color:#ffcd00;
    &:active{
      background-color:#ff661d;
    }
  }
  .btn_map_icon{
    display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;bottom:10px;right:10px;z-index:10;font-size:0;line-height:0;
    button{
      display:flex;justify-content:center;align-items:center;
      position:relative;width:25px;height:25px;border:1px solid #c2c2c2;border-radius:2px;color:#343434;font-size:0;background:#fff;
      &:active{
        background-color: #f5f5f5;
      }
      &:before, &:after{
        width:10px;height:2px;background:#565656;
        position:absolute;
        left:50%;top:50%;
        transform:translate(-50%, -50%);
        content: '';
      }
      &:after{
        transform:translate(-50%, -50%) rotate(90deg);
      }
    }
    button + button{
      margin-top:5px;
      &:after{
        content:normal;
      }
    }
  }
</style>