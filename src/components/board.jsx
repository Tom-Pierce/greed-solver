import Square from "./square";

const Board = () => {
  const rows = inputString.split("\n");
  const gameboard = rows.map((row, y) => {
    return row.split("").map((data, x) => {
      return Square(data, x, y);
    });
  });

  return {
    gameboard,
  };
};
/*
const inputString = `177844984659198125499712718949
289578351267294842432483549928
948252359781296776225215883556
364111832662421858899528694935
644422749742847643715867749441
715168883454552982611282371638
357729782318874878863534834654
293686928768247732737315665969
341519923397628483587223681385
361856692315774262238669234634
144263446776211@95592452115664
358454543552618963191249464549
558225269889964348752938797855
264615566263541468944938146141
391588998355727733231313178985
258339436612987266949187368895
191175766194759667398683289888
512289472652849872821522583542
962777348571369844915917629827
737582928769799974358292497114`;
*/

const inputString = `343763752847884454939353361522
917734624349893525297793986696
337777731463376742827585196186
748373951447342974291151267917
982219448238862381452399815367
648461396876536872647747133689
492676643897888552331214559849
936631771147967566979616638358
755554836685983931447681444765
332487544415986138452183246478
223488178951537@77865627196538
526947894181483114211748291262
985159386281749718371733791345
917812254437642226921151466295
678163393799333763115467831169
267839487753417835393642179467
145471964958819255444835942593
361519954455536165717925985984
977248786189924817684849273247
245725689845733737464611726124`;

export default Board;
