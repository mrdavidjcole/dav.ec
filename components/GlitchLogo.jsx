export default (props) => {
  const { style, foregroundColor, backgroundColor } = props;
  return (
    <svg
      style={style}
      viewBox="0 0 310 250"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M80.1968817,123.300882 C69.8309019,125.238877 64.1004439,125.011351 55.8939691,125.011351 C47.3415524,125.011351 13.4908903,111.984883 2.58435847,98.0179617 C2.58435847,98.0179617 19.5166647,93.8253458 19.5166647,90.2828266 C19.5166647,86.7403073 0.174612077,80.1936302 0.174612077,80.1936302 C0.174612077,80.1936302 -2.75592344,63.8524778 17.9780043,47.5338886 C38.711932,31.2152993 54.2275944,23.4696122 71.6639067,22.5635721 C89.1002189,21.657532 94.9459758,21.657532 94.9459758,21.657532 C94.9459758,21.657532 110.125037,0.885478842 118.099149,0.885478842 C122.085316,0.885478842 180.491218,13.4669911 185.55017,21.657532 C190.609122,29.848073 193.070958,29.2522158 195.656509,31.2152993 C198.24206,33.1783829 196.613163,31.6085263 208.329443,34.2617038 C237.635365,40.8980947 233.637546,43.5034784 255.411216,47.5338886 C264.223621,49.1651068 304.60709,29.0501246 308.416471,31.0037559 C310.190182,31.9133991 311.582438,49.2137089 304.648991,60.5569739 C297.715544,71.9002388 310.214818,81.2706255 304.601723,95.4751004 C298.988628,109.679575 311.029949,120.202815 308.416471,125.011351 C305.802992,129.819888 262.921805,109.274252 255.411216,110.759796 C247.900626,112.245341 224.945961,123.427008 178.42752,130.489609 C161.678545,133.032501 144.571616,132.651104 129.484595,131.167615 C133.444261,138.830396 132.576192,146.510382 132.576192,146.510382 C132.576192,146.510382 122.954174,149.446386 105.564501,145.708539 C89.0606926,142.161106 80.9775915,125.036409 80.1968817,123.300882 Z" fill={foregroundColor}></path>
      <path d="M80.6213148,45.0905275 C80.6741718,45.1543334 80.795158,45.305204 80.974433,45.5369282 C81.2859966,45.9396438 81.6365538,46.4111883 82.0162502,46.9452142 C83.1083572,48.4812137 84.2026194,50.1947233 85.2203916,52.031881 C87.6326446,56.3861846 89.215259,60.7094649 89.6080083,64.6517622 C89.8228657,66.8084356 89.67392,69.4304282 89.1914865,72.4017935 C88.6955073,75.4565892 87.8700628,78.757003 86.8069399,82.1486277 C86.1588534,84.2161837 85.4633375,86.1883331 84.7688618,87.9932999 C84.5269379,88.6220686 84.3031312,89.1833935 84.1035068,89.6685042 C83.9868086,89.9520947 83.9062784,90.1423512 83.8679777,90.2305743 C83.0608839,92.0896579 83.734625,94.3392421 85.3728206,95.2551614 C87.0110162,96.1710806 88.9933149,95.4064948 89.8004088,93.5474112 C90.0149233,93.0532921 90.3739967,92.1807015 90.8296337,90.9964849 C91.5827397,89.0391358 92.3348055,86.9066382 93.0377953,84.6639271 C94.2104686,80.9228097 95.1288567,77.2507749 95.6953411,73.7617295 C96.28677,70.1190482 96.4761036,66.7860811 96.1794767,63.8086317 C95.6578219,58.5724196 93.7143462,53.2633625 90.8191794,48.0373621 C89.6541494,45.9343926 88.4096949,43.9856963 87.1630853,42.2323958 C86.4062688,41.1679674 85.8061112,40.3922259 85.4397317,39.9499531 C84.1888636,38.4399753 82.0961952,38.3666531 80.7656261,39.7861835 C79.435057,41.2057139 79.3704467,43.5805496 80.6213148,45.0905275 Z" fill={backgroundColor} fillRule="nonzero"></path>
      <path d="M111.24482,44.4400041 C116.541613,44.7162156 121.838267,45.0014895 126.780891,45.2803905 C128.506123,45.3777414 130.160892,45.4728061 131.736118,45.5651878 C136.20343,45.8271805 139.951617,46.0628708 142.829574,46.2655596 C153.656655,47.0280897 170.345397,49.5696217 183.095033,52.1493879 C202.636735,56.1034634 218.589226,61.9533359 243.91958,73.3329465 C245.851211,74.2007276 252.484357,77.1964783 252.638599,77.2660055 C254.335832,78.0310607 256.258222,77.0898629 256.932377,75.1637813 C257.606531,73.2376997 256.777162,71.0561023 255.079929,70.291047 C254.930612,70.2237401 248.292071,67.2255526 246.353804,66.3547901 C220.645116,54.8052136 204.331846,48.8230413 184.255878,44.7608622 C171.278452,42.135005 154.355676,39.5578319 143.23921,38.774921 C140.334586,38.570354 136.565574,38.3333542 132.07743,38.0701398 C130.497727,37.9774956 128.838691,37.8821857 127.109322,37.7846014 C122.157445,37.5051782 116.852848,37.2194766 111.54839,36.9428653 C109.691938,36.846057 107.968057,36.7572973 106.420899,36.67851 C105.879311,36.6509302 105.398469,36.6265656 104.983892,36.6056565 C104.56361,36.5844977 104.56361,36.5844977 104.474672,36.5800501 C101.930605,36.4528301 100.219963,39.4997764 101.396543,42.062723 C101.441815,42.1613386 101.535942,42.3715389 101.671909,42.6837005 C101.903943,43.2164198 102.16394,43.8321454 102.444879,44.5211782 C103.250864,46.4979454 104.057882,48.6543393 104.809793,50.9109937 C106.001483,54.4875206 106.93665,57.9650846 107.517901,61.1880605 C107.735426,62.3942137 107.900517,63.5510415 108.010176,64.6517622 C108.32804,67.8423841 107.617754,73.3514576 106.074182,80.3156715 C105.528772,82.7764306 104.891668,85.3674461 104.181346,88.0447978 C103.311389,91.3238481 102.378018,94.5616855 101.444834,97.6120946 C101.118498,98.6788258 100.815786,99.6450323 100.544625,100.492639 C100.450187,100.78784 100.36659,101.046676 100.294827,101.266894 C100.252502,101.396775 100.223023,101.486475 100.210253,101.524999 C99.5676073,103.464902 100.432393,105.628717 102.141805,106.358015 C103.851218,107.087312 105.757938,106.105922 106.400584,104.166019 C106.419394,104.109216 106.4511,104.012738 106.497593,103.870068 C106.573859,103.636033 106.661977,103.363196 106.760964,103.053779 C107.042447,102.173904 107.355539,101.17457 107.692376,100.07351 C108.653971,96.9302331 109.61538,93.5951306 110.513884,90.2084819 C111.251977,87.4264525 111.915982,84.7260353 112.487744,82.1463844 C114.214615,74.3551681 115.014368,68.1521797 114.581644,63.8086317 C114.448985,62.4770335 114.252578,61.1007744 113.996933,59.6832451 C113.337666,56.0276819 112.303057,52.1803266 110.995672,48.2565744 C110.549355,46.9170766 110.085928,45.6126566 109.614629,44.35529 C110.145333,44.382771 110.689127,44.4110264 111.24482,44.4400041 Z" fill={backgroundColor} fillRule="nonzero"></path>
      <g transform="translate(43.838525, 68.150533) scale(-1, 1) translate(-43.838525, -68.150533) translate(29.338525, 51.285453)">
        <ellipse fill={foregroundColor} cx="14.482068" cy="16.4347743" rx="14.482068" ry="16.4347743"></ellipse>
        <path d="M28.9632632,16.6170991 C28.9638446,16.5564025 28.964136,16.495627 28.964136,16.4347743 C28.964136,7.35809907 22.4802933,0 14.482068,0 C6.4838427,0 -1.86517468e-12,7.35809907 -1.86517468e-12,16.4347743 C-1.86517468e-12,25.5114495 6.4838427,32.8695485 14.482068,32.8695485 C21.6473001,32.8695485 27.5971613,26.9642903 28.7587659,19.2084135 C27.7596087,25.0418774 23.2334146,29.4456372 17.8008753,29.4456372 C11.6355766,29.4456372 6.63761451,23.7737692 6.63761451,16.7771654 C6.63761451,9.7805616 11.6355766,4.10869357 17.8008753,4.10869357 C23.9190893,4.10869357 28.8877287,9.69425984 28.9632632,16.6170991 Z" fill={backgroundColor}></path>
        <ellipse fill={backgroundColor} cx="21.1196825" cy="20.5434678" rx="3.0170975" ry="3.4239113"></ellipse>
      </g>
      <g transform="translate(0.000000, 101.318171)">
        <path d="M80.1968817,123.300882 C69.8309019,125.238877 64.1004439,125.011351 55.8939691,125.011351 C47.3415524,125.011351 13.4908903,111.984883 2.58435847,98.0179617 C2.58435847,98.0179617 19.5166647,93.8253458 19.5166647,90.2828266 C19.5166647,86.7403073 0.174612077,80.1936302 0.174612077,80.1936302 C0.174612077,80.1936302 -2.75592344,63.8524778 17.9780043,47.5338886 C38.711932,31.2152993 54.2275944,23.4696122 71.6639067,22.5635721 C89.1002189,21.657532 94.9459758,21.657532 94.9459758,21.657532 C94.9459758,21.657532 110.125037,0.885478842 118.099149,0.885478842 C122.085316,0.885478842 180.491218,13.4669911 185.55017,21.657532 C190.609122,29.848073 193.070958,29.2522158 195.656509,31.2152993 C198.24206,33.1783829 196.613163,31.6085263 208.329443,34.2617038 C237.635365,40.8980947 233.637546,43.5034784 255.411216,47.5338886 C264.223621,49.1651068 304.60709,29.0501246 308.416471,31.0037559 C310.190182,31.9133991 311.582438,49.2137089 304.648991,60.5569739 C297.715544,71.9002388 310.214818,81.2706255 304.601723,95.4751004 C298.988628,109.679575 311.029949,120.202815 308.416471,125.011351 C305.802992,129.819888 262.921805,109.274252 255.411216,110.759796 C247.900626,112.245341 224.945961,123.427008 178.42752,130.489609 C161.678545,133.032501 144.571616,132.651104 129.484595,131.167615 C133.444261,138.830396 132.576192,146.510382 132.576192,146.510382 C132.576192,146.510382 122.954174,149.446386 105.564501,145.708539 C89.0606926,142.161106 80.9775915,125.036409 80.1968817,123.300882 Z" fill={foregroundColor}></path>
        <path d="M80.6213148,45.0905275 C80.6741718,45.1543334 80.795158,45.305204 80.974433,45.5369282 C81.2859966,45.9396438 81.6365538,46.4111883 82.0162502,46.9452142 C83.1083572,48.4812137 84.2026194,50.1947233 85.2203916,52.031881 C87.6326446,56.3861846 89.215259,60.7094649 89.6080083,64.6517622 C89.8228657,66.8084356 89.67392,69.4304282 89.1914865,72.4017935 C88.6955073,75.4565892 87.8700628,78.757003 86.8069399,82.1486277 C86.1588534,84.2161837 85.4633375,86.1883331 84.7688618,87.9932999 C84.5269379,88.6220686 84.3031312,89.1833935 84.1035068,89.6685042 C83.9868086,89.9520947 83.9062784,90.1423512 83.8679777,90.2305743 C83.0608839,92.0896579 83.734625,94.3392421 85.3728206,95.2551614 C87.0110162,96.1710806 88.9933149,95.4064948 89.8004088,93.5474112 C90.0149233,93.0532921 90.3739967,92.1807015 90.8296337,90.9964849 C91.5827397,89.0391358 92.3348055,86.9066382 93.0377953,84.6639271 C94.2104686,80.9228097 95.1288567,77.2507749 95.6953411,73.7617295 C96.28677,70.1190482 96.4761036,66.7860811 96.1794767,63.8086317 C95.6578219,58.5724196 93.7143462,53.2633625 90.8191794,48.0373621 C89.6541494,45.9343926 88.4096949,43.9856963 87.1630853,42.2323958 C86.4062688,41.1679674 85.8061112,40.3922259 85.4397317,39.9499531 C84.1888636,38.4399753 82.0961952,38.3666531 80.7656261,39.7861835 C79.435057,41.2057139 79.3704467,43.5805496 80.6213148,45.0905275 Z" fill={backgroundColor} fillRule="nonzero"></path>
        <path d="M111.24482,44.4400041 C116.541613,44.7162156 121.838267,45.0014895 126.780891,45.2803905 C128.506123,45.3777414 130.160892,45.4728061 131.736118,45.5651878 C136.20343,45.8271805 139.951617,46.0628708 142.829574,46.2655596 C153.656655,47.0280897 170.345397,49.5696217 183.095033,52.1493879 C202.636735,56.1034634 218.589226,61.9533359 243.91958,73.3329465 C245.851211,74.2007276 252.484357,77.1964783 252.638599,77.2660055 C254.335832,78.0310607 256.258222,77.0898629 256.932377,75.1637813 C257.606531,73.2376997 256.777162,71.0561023 255.079929,70.291047 C254.930612,70.2237401 248.292071,67.2255526 246.353804,66.3547901 C220.645116,54.8052136 204.331846,48.8230413 184.255878,44.7608622 C171.278452,42.135005 154.355676,39.5578319 143.23921,38.774921 C140.334586,38.570354 136.565574,38.3333542 132.07743,38.0701398 C130.497727,37.9774956 128.838691,37.8821857 127.109322,37.7846014 C122.157445,37.5051782 116.852848,37.2194766 111.54839,36.9428653 C109.691938,36.846057 107.968057,36.7572973 106.420899,36.67851 C105.879311,36.6509302 105.398469,36.6265656 104.983892,36.6056565 C104.56361,36.5844977 104.56361,36.5844977 104.474672,36.5800501 C101.930605,36.4528301 100.219963,39.4997764 101.396543,42.062723 C101.441815,42.1613386 101.535942,42.3715389 101.671909,42.6837005 C101.903943,43.2164198 102.16394,43.8321454 102.444879,44.5211782 C103.250864,46.4979454 104.057882,48.6543393 104.809793,50.9109937 C106.001483,54.4875206 106.93665,57.9650846 107.517901,61.1880605 C107.735426,62.3942137 107.900517,63.5510415 108.010176,64.6517622 C108.32804,67.8423841 107.617754,73.3514576 106.074182,80.3156715 C105.528772,82.7764306 104.891668,85.3674461 104.181346,88.0447978 C103.311389,91.3238481 102.378018,94.5616855 101.444834,97.6120946 C101.118498,98.6788258 100.815786,99.6450323 100.544625,100.492639 C100.450187,100.78784 100.36659,101.046676 100.294827,101.266894 C100.252502,101.396775 100.223023,101.486475 100.210253,101.524999 C99.5676073,103.464902 100.432393,105.628717 102.141805,106.358015 C103.851218,107.087312 105.757938,106.105922 106.400584,104.166019 C106.419394,104.109216 106.4511,104.012738 106.497593,103.870068 C106.573859,103.636033 106.661977,103.363196 106.760964,103.053779 C107.042447,102.173904 107.355539,101.17457 107.692376,100.07351 C108.653971,96.9302331 109.61538,93.5951306 110.513884,90.2084819 C111.251977,87.4264525 111.915982,84.7260353 112.487744,82.1463844 C114.214615,74.3551681 115.014368,68.1521797 114.581644,63.8086317 C114.448985,62.4770335 114.252578,61.1007744 113.996933,59.6832451 C113.337666,56.0276819 112.303057,52.1803266 110.995672,48.2565744 C110.549355,46.9170766 110.085928,45.6126566 109.614629,44.35529 C110.145333,44.382771 110.689127,44.4110264 111.24482,44.4400041 Z" fill={backgroundColor} fillRule="nonzero"></path>
        <g transform="translate(43.838525, 68.150533) scale(-1, 1) translate(-43.838525, -68.150533) translate(29.338525, 51.285453)">
          <ellipse fill={foregroundColor} cx="14.482068" cy="16.4347743" rx="14.482068" ry="16.4347743"></ellipse>
          <path d="M28.9632632,16.6170991 C28.9638446,16.5564025 28.964136,16.495627 28.964136,16.4347743 C28.964136,7.35809907 22.4802933,0 14.482068,0 C6.4838427,0 -1.86517468e-12,7.35809907 -1.86517468e-12,16.4347743 C-1.86517468e-12,25.5114495 6.4838427,32.8695485 14.482068,32.8695485 C21.6473001,32.8695485 27.5971613,26.9642903 28.7587659,19.2084135 C27.7596087,25.0418774 23.2334146,29.4456372 17.8008753,29.4456372 C11.6355766,29.4456372 6.63761451,23.7737692 6.63761451,16.7771654 C6.63761451,9.7805616 11.6355766,4.10869357 17.8008753,4.10869357 C23.9190893,4.10869357 28.8877287,9.69425984 28.9632632,16.6170991 Z" fill={backgroundColor}></path>
          <ellipse fill={backgroundColor} cx="21.1196825" cy="20.5434678" rx="3.0170975" ry="3.4239113"></ellipse>
        </g>
      </g>
    </svg>
  );
};