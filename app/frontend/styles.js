import {transitions as imba_transitions, styles as imba_styles} from 'imba';
imba_transitions.addSelectors([".error.error",".hint.hint"],'transition');
/*body*/


imba_styles.register('mnqpkf',`
:root {--e_d:0ms;--e_f:ease-in-out;--e_w:0ms}

._instant_ { transition-duration:0ms !important; }

._easing_ {--e_d:300ms;}

._ease_, .error.error, .hint.hint {
transition:      all var(--e_d) var(--e_f) var(--e_w),
	       transform var(--e_dt,var(--e_d)) var(--e_ft,var(--e_f)) var(--e_wt,var(--e_w)),
	           color var(--e_dc,var(--e_d)) var(--e_fc,var(--e_f)) var(--e_wc,var(--e_w)),
	background-color var(--e_dc,var(--e_d)) var(--e_fc,var(--e_f)) var(--e_wc,var(--e_w)),
	         opacity var(--e_do,var(--e_d)) var(--e_fo,var(--e_f)) var(--e_wo,var(--e_w));
}


* {margin: 0rem;
box-sizing: border-box;}
body {font-family: var(--font-sans,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");}
input {padding: 0.5rem;
border: 1px solid hsla(240.00,5.88%,90.00%,100%);}
table {width: 100%;
border-collapse: collapse;
margin-top: 1rem;}
th,td {padding: 0.5rem;
text-align: left;
border: 1px solid hsla(240.00,5.88%,90.00%,100%);}
th {font-size: 13px;
line-height: 20px;
--u_lh: 20px;
font-weight: 400;}
.full.full {width: 100%;}
.error.error,.hint.hint {margin-top: 0.25rem;
margin-left: 0.25rem;
font-size: 12px;
line-height: 18px;
--u_lh: 18px;
color: hsla(240.00,5.03%,64.90%,100%);}
.error._off_.error,.hint._off_.hint {opacity: 0;}
`);