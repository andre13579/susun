<main>
  <h2 class="tit_andre">찾아오시는 길</h2>
  <p class="txt_desc">
    <span class="emph_line7">7호선 광명사거리역</span> 10번 출구 약 2분 거리
  </p>
  <div id="map" class="map_andre">
  <div class="btn_map_icon">
    <button type="button" id="zoomIn" title="지도 확대하기">+</button>
    <button type="button" id="zoomOut" title="지도 축소하기">-</button>
  </div>
  </div>

  <div class="wrap_location">
    <button type="button" id="searchStore" class="btn_location">
      가게 위치 보기<img src="./assets/location.png" class="img_location" alt="">
    </button>
  </div>
  <h2 class="tit_andre">공유하기</h2>
  <div class="wrap_btn">
    <button type="button" id="shareTw" class="btn_comm">트위터로 공유하기</button>
    <button type="button" id="shareFb" class="btn_comm">페이스북으로 공유하기</button>
    <button type="button" id="shareKt" class="btn_comm">카카오톡으로 공유하기</button>
    <button type="button" id="shareKs" class="btn_comm">카카오스토리로 공유하기</button>
  </div>
</main>

<script>
import { onMount } from 'svelte'
import { init, clickEvent } from '~/js/andre'

onMount(() => {
  const { map, marker, location, Kakao } = init();

  clickEvent(map, location, Kakao); // 클릭 이벤트
  marker.setMap(map); // 마커 표시
});
</script>
