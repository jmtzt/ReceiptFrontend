let pageStyles =
  "@page{ \
	position: absolute !important; \
	width: 297mm; \
	height: 210mm; \
margin: 10mm 0mm 9mm 8mm; \
} \
 \
.comprovantes{ \
		  display: inline-block; \
		  margin: 0; \
		  } \
 \
.outsideDiv{ \
	display: inline-block; \
	position: relative; \
	width: 63mm; \
	height: 47mm; \
	margin-top: 0mm; \
	margin-left: 0mm; \
	margin-bottom: 0mm !important; \
	margin-right: 2mm; \
		  border: 1px solid black; \
	/*padding-top: 1.5mm;*/ \
} \
 \
.insideDiv{ \
	position: relative; \
	width: 62mm; \
	float: left; \
	margin-left: 1mm; \
	/*margin-bottom: 1mm;*/ \
	margin-block-start: 0 !important; \
	margin-block-end: 0 !important; \
 	margin-inline-end: 0px; \
	padding: 0; \
	font-size: 7.4pt; \
} \
.pageBreak{ \
		  page-break-after: always; \
		  } \
";
export default pageStyles;
