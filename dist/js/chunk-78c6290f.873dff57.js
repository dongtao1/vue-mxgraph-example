(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78c6290f"],{"846f":function(A,t){A.exports="data:image/gif;base64,R0lGODlhCgAKAOZPAP7//1qt4afV7S+b2WCy4Vms4CqY0/L3/Z/Q8NPr92Gz4jOb2mWz49Lr8tLq9uvy+tPp9+Xy+mK14ejy+1ux4Fus4evx//7+/mm35fv//qfU69fp9Vis26HP8DGb1dTq+PH5+zOc1v38/yma1P79/zSc2e3x+lKs4Gez5Fiu4SmX1imW1zKa2V2w4jOe1C2Z2i+c1Vyu4Fiu3zOd1//+/1ir3Wiy36HS8PH7/M7o9V6w3+j1/Vmv4PL2/1Ot35/Q8S2W2DCb02O33OP1+e75+yaZ0lus4y6d1V6w4ub09+/6/qfV79jq+PX4/1it4////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAE8ALAAAAAAKAAoAAAdigE9PSgISCgIggk9MAy46SAswG08HLzw7AAAPFSMHN0FDHy0FCRFHHQUoND5AKycANk4yQiQ1KkUcFxgBCCVJDjFGDRYePz0GKRMZIiYBBkRPOSwhBBQzAxCKOEsMBBpNgoEAOw=="},b7f9:function(A,t,e){},ec65:function(A,t,e){"use strict";var n=e("b7f9"),i=e.n(n);i.a},f808:function(A,t,e){"use strict";e.r(t);var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"customShapeContainer"},[e("div",{ref:"container",staticClass:"graphContainer"})])},i=[],r=e("d06c"),a={name:"customShape",data:function(){return{graph:null,rubberBand:null}},methods:{createGraph:function(){this.graph=new r["mxGraph"](this.$refs.container),this.$refs.container.style.background='url("./mxgraph/images/grid.gif")'},initGraph:function(){if(!this.R.isNil(this.graph)){this.rubberBand=new r["mxRubberband"](this.graph),this.graph.setConnectable(!0);var A=e("846f");r["mxConstraintHandler"].prototype.pointImage=new r["mxImage"](A,10,10),r["mxConstraintHandler"].prototype.createHighlightShape=function(){return new r["mxEllipse"](null,this.highlightColor,this.highlightColor,2)},this.graph.getAllConnectionConstraints=function(A){if(null!==A&&null!==A.shape){var t=A["cell"],e=t["constraints"];if(e instanceof Array&&e.length>0)return e.map(function(A){return new r["mxConnectionConstraint"](new r["mxPoint"](A["x"],A["y"]),A["perimeter"])});if(A.shape.stencil)return A.shape.stencil.constraints;if(A.shape.constraints)return A.shape.constraints}return null},this.graph.connectionHandler.isConnectableCell=function(){return!1}}},addCell:function(){var A=this.graph.getDefaultParent();this.graph.getModel().beginUpdate();try{var t=this.graph.insertVertex(A,null,null,500,10,200,200,"shape=rect");t["constraints"]=[{x:-.5,y:.25,perimeter:!0},{x:-.5,y:.25,perimeter:!1},{x:-.5,y:.75,perimeter:!0},{x:-.5,y:.75,perimeter:!1},{x:1,y:.25,perimeter:!1},{x:1,y:.75,perimeter:!1}]}finally{this.graph.getModel().endUpdate()}}},mounted:function(){this.createGraph(),this.initGraph(),this.addCell()}},s=a,l=(e("ec65"),e("2877")),o=Object(l["a"])(s,n,i,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-78c6290f.873dff57.js.map