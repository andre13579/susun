<main>
  <h2>찾아오시는 길</h2>
  <div id="map" style="width:100%;height:400px">
  <div class="btn_map_icon">
    <button type="button" id="zoomIn" title="지도 확대하기">+</button>
    <button type="button" id="zoomOut" title="지도 축소하기">-</button>
  </div>
  </div>

  <div class="wrap_btn">
    <button type="button" id="searchStore" class="btn_comm">가게 위치 보기</button>
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
    const pageUrl = 'susun.pages.dev';
    const btnSearchStore = document.querySelector('#searchStore');
    const btnZoomIn = document.querySelector('#zoomIn');
    const btnZoomOut = document.querySelector('#zoomOut');
    const btnShareTw = document.querySelector('#shareTw');
    const btnShareFb = document.querySelector('#shareFb');
    const btnShareKt = document.querySelector('#shareKt');

    // 지도 센터 부드럽게 이동
    btnSearchStore.addEventListener('click', () => {
      const moveLatLon = new kakao.maps.LatLng(...location);
      map.panTo(moveLatLon);
    })
    // 지도 확대하기
    btnZoomIn.addEventListener('click', () => {
      const level = map.getLevel();
      map.setLevel(level - 1);
    })
    // 지도 축소하기
    btnZoomOut.addEventListener('click', () => {
      const level = map.getLevel();
      map.setLevel(level + 1);
    })
    // 트위터로 공유하기
    btnShareTw.addEventListener('click', () => {
      const sendText = '앙드레 옷 수선';
      window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl}`)
    })
    // 페이스북 공유하기
    btnShareFb.addEventListener('click', () => {
      window.open(`http://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
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
            imageUrl: `https://${pageUrl}/assets/logo_andre.png`, // 콘텐츠 URL
            link: {
              mobileWebUrl: `https://${pageUrl}`,
              webUrl: `https://${pageUrl}`
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
