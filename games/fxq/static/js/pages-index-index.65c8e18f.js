(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["pages-index-index"], {
		"01d5": function(e, t, i) {
			var a = i("24fb");
			t = a(!1), t.push([e.i,
				'@font-face{font-family:keyboard;\n\t/* Project id 3416614 */src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOYAAsAAAAAB4gAAANLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDHAqCMIImATYCJAMQCwoABCAFhGcHSRuvBlFUTmJkX2FThnuRwHYHE4QAIC7eAAI4iFBdNHsBCP8cJA8MEYRj6H2SAoBidMC6qqqKx0LOT23CzWgyhlgi6V5N2z6tjUetMOmO2lW1pO0ll3Y3l80XRzHuhXuMwiEkDottmkYY45xtyxNOnrirQg6wzlcJjmSgm5rbyGLaOULR0GYhodH0Pw2p4k28QRwkqKIl4R065FWYmH1/Kd8lIVwLALT6KKVhKQ3/hA7sAKMBKr0RBiiCHAXZtSfrGoFac3ZM7Zxc3cLatYgbWDfDEAdxcVyTWQQLvE9RkKwWKttOLeKOCtKt9HDb/358tRBIKjJjlf2z4xTePvhwIz9eAPJbrkhA94QKZEytzB6X6r1HpsPYlGm1Za1nrADVqiVGrWv+0Fz8iZ21q8y/PEKWiEpGYT1YIvHMh2pbTvChWV1muYGkhLdC1WHeIXCTQf3+sBBSqkHTrg5tnl3AGS+7XuHtRZjYdqs26IlQfEojIMbQA8ZlKYF1eQolaVZpIcoZxMKwJbOhvGZkuCIrJQmOOsdNoJTAB07LYozY8hiIUKzBfx0xu4d7LYWXLhBiMSD8UKA52PLfv8Ihf0jk/Rpp32OgmleEv/8m8ATGV/apY2CaCbJ09CfQ0tufc+vuO60V/Aae0IZH3YRi6FLTkvEUFKlwDwJ53G1kpIwvK7jK46kQRcNO6WFiAPJiOuS76f6b3ziNn/tD09Z/dQW8f7Q931q0p+oz9QZ/wnLYUrCofkop09vav0vzvSMJtaaDV5+i1ecY1Na6kFCtLUZSpQ9ZtQGuyCZQoc4CKlVbRa1Jx7PrtNGmRanBiBcKodkESaN7yJq9c0X2gQqdvlCp2T9qHcTqcnVGokNDEVOK8QhlohphzeWSRrGKTHpNWVdFRtf5/e7JtFI16NluNnlKDZkhRrT9zGcWKIyq8WSs3aiqFGqjCkrYzpn1huOIso/YiarhkEEijKRQbARJCaUh3AgrETaJKREjdY1kOlWaWcMEdx8zWnKkxpHH5rbgTs1NK+ZKbmn1ZXyMCUgwlBo6WVsnUqkoSJd3KpAEs+U9ItoGxxQSbc32Hql+eiquBmOJEilylKhQTmTUzLe50yTJu7U4SspWU1VkCVlVAAA=") format("woff2")}.keyboard-icon[data-v-280fc3ea]{font-family:keyboard!important;font-size:inset;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.key-dian[data-v-280fc3ea]:before{content:"\\e608"}.key-shanchu[data-v-280fc3ea]:before{content:"\\e66e"}.key-backspace[data-v-280fc3ea]:before{content:"\\e610"}.key-hover[data-v-280fc3ea]{background-color:#e0e0e0!important}',
				""
			]), e.exports = t
		},
		"0369": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "a", (function() {
				return a
			}));
			var a = {
					uNavbar: i("86c4").default,
					uIcon: i("a6a2").default,
					uPopup: i("6c36").default,
					uSwitch: i("f3b1").default,
					lyyPassInput: i("c7cf").default,
					akiParticles: i("d79a").default
				},
				n = function() {
					var e = this,
						t = e.$createElement,
						i = e._self._c || t;
					return i("v-uni-view", {
						staticClass: "body"
					}, [i("u-navbar", {
						staticClass: "navbar",
						attrs: {
							placeholder: !0,
							title: "情侣飞行棋 " + e.v,
							titleStyle: {
								color: "#fff"
							}
						},
						scopedSlots: e._u([{
							key: "left",
							fn: function() {
								return [i("v-uni-view")]
							},
							proxy: !0
						}])
					}, [i("v-uni-view", {
						staticStyle: {
							display: "flex"
						},
						attrs: {
							slot: "right"
						},
						slot: "right"
					}, [i("u-icon", {
						staticStyle: {
							"margin-right": "10rpx"
						},
						attrs: {
							name: "email",
							size: "25",
							color: "#fff"
						},
						on: {
							click: function(t) {
								arguments[0] = t = e.$handleEvent(t), e
									.myTipFlag = !0
							}
						}
					}), i("u-icon", {
						attrs: {
							name: "setting",
							size: "20",
							color: "#fff"
						},
						on: {
							click: function(t) {
								arguments[0] = t = e.$handleEvent(t), e
									.rightClick.apply(void 0, arguments)
							}
						}
					})], 1)], 1), i("v-uni-view", {
						staticClass: "main"
					}, [i("v-uni-view", {
						staticClass: "my-main"
					}, e._l(e.list, (function(t) {
						return i("v-uni-view", {
							key: t.id,
							staticClass: "btn",
							class: {
								active: t.goFlag
							},
							attrs: {
								"hover-class": "hover-class"
							},
							on: {
								click: function(i) {
									arguments[0] = i = e
										.$handleEvent(i), e
										.weGo(t)
								}
							}
						}, [i("v-uni-view", {
								staticClass: "my-text"
							}, [e._v(e._s(t.title))]), t.hot ? i(
								"v-uni-view", {
									staticClass: "hot"
								}, [e._v("HOT")]) : e._e(), t
							.lockFlag && !e.lockVip ? i("u-icon", {
								attrs: {
									name: "lock",
									color: "#fff",
									size: "16"
								}
							}) : e._e()
						], 1)
					})), 1)], 1), i("v-uni-view", {
						staticClass: "bottom-bg"
					}), i("v-uni-view", {
						staticStyle: {
							height: "44px"
						}
					}), i("v-uni-view", {
						staticStyle: {
							position: "fixed",
							"z-index": "9999"
						}
					}, [i("u-popup", {
						attrs: {
							show: e.setShow,
							mode: "center",
							customStyle: "backgroundColor:transparent"
						},
						on: {
							close: function(t) {
								arguments[0] = t = e.$handleEvent(t), e
									.setShow = !1
							}
						}
					}, [i("v-uni-view", [i("v-uni-view", {
						staticClass: "tip-box"
					}, [i("v-uni-view", {
						staticClass: "tip-text"
					}, [e._v("语音提示")]), i("u-switch", {
						attrs: {
							value: e.voiceOpen,
							activeColor: "#e47470"
						},
						on: {
							change: function(t) {
								arguments[0] = t = e
									.$handleEvent(t), e
									.voiceOpenChange
									.apply(void 0,
										arguments)
							}
						}
					})], 1), i("v-uni-view", {
						staticClass: "tip-box"
					}, [i("v-uni-view", {
						staticClass: "tip-text"
					}, [e._v("游戏内背景")]), i("u-switch", {
						attrs: {
							value: e.gameBg,
							activeColor: "#e47470"
						},
						on: {
							change: function(t) {
								arguments[0] = t = e
									.$handleEvent(t), e
									.setGameBg.apply(
										void 0,
										arguments)
							}
						}
					})], 1), i("v-uni-view", {
						staticClass: "tip-box"
					}, [i("v-uni-view", {
						staticClass: "tip-text"
					}, [e._v("主界面背景")]), i("u-switch", {
						attrs: {
							value: e.mainBg,
							activeColor: "#e47470"
						},
						on: {
							change: function(t) {
								arguments[0] = t = e
									.$handleEvent(t), e
									.setMainBg.apply(
										void 0,
										arguments)
							}
						}
					})], 1), i("v-uni-view", {
						staticClass: "tip-box",
						attrs: {
							"hover-class": "hover-class"
						},
						on: {
							click: function(t) {
								arguments[0] = t = e
									.$handleEvent(t), e
									.lockVipClick.apply(void 0,
										arguments)
							}
						}
					}, [i("v-uni-view", {
						staticClass: "tip-text"
					}, [e._v("识别码")]), i("u-icon", {
						attrs: {
							name: "arrow-right",
							label: e.lockVip ? "已激活" :
								"未激活",
							labelPos: "left",
							labelColor: "#fff",
							color: "#fff"
						}
					})], 1), i("v-uni-view", {
						staticClass: "tip-box",
						attrs: {
							"hover-class": "hover-class"
						},
						on: {
							click: function(t) {
								arguments[0] = t = e
									.$handleEvent(t), e
									.goVersion.apply(void 0,
										arguments)
							}
						}
					}, [i("v-uni-view", {
						staticClass: "tip-text"
					}, [e._v("版本")]), i("u-icon", {
						attrs: {
							name: "arrow-right",
							label: e.v,
							labelPos: "left",
							labelColor: "#fff",
							color: "#fff"
						}
					})], 1)], 1)], 1)], 1), i("v-uni-view", {
						staticStyle: {
							position: "fixed",
							"z-index": "9999"
						}
					}, [i("lyy-pass-input", {
						ref: "pwd",
						attrs: {
							money: e.mapNumber(e.decrypt(e.code)),
							title: "输入验证码"
						},
						on: {
							copySend: function(t) {
								arguments[0] = t = e.$handleEvent(t), e.copySend
									.apply(void 0, arguments)
							},
							confirm: function(t) {
								arguments[0] = t = e.$handleEvent(t), e
									.confirmPwd.apply(void 0, arguments)
							}
						}
					})], 1), i("v-uni-view", {
						staticStyle: {
							position: "fixed",
							"z-index": "9999"
						}
					}, [i("u-popup", {
						attrs: {
							show: e.customShow,
							mode: "center",
							customStyle: "backgroundColor:transparent"
						},
						on: {
							close: function(t) {
								arguments[0] = t = e.$handleEvent(t), e
									.customShow = !1
							}
						}
					}, [i("v-uni-view", [e._l(e.userCustomList, (function(t) {
						return i("v-uni-view", {
							key: t.id,
							staticClass: "tip-box",
							on: {
								click: function(i) {
									arguments[0] =
										i = e
										.$handleEvent(
											i), e
										.goChess(t
											.id)
								}
							}
						}, [i("v-uni-view", {
								staticClass: "tip-text"
							}, [e._v(e._s(t
							.title))]), i(
						"u-icon", {
							attrs: {
								name: "arrow-right",
								color: "#fff"
							}
						})], 1)
					})), i("v-uni-view", {
						staticClass: "tip-box",
						staticStyle: {
							"justify-content": "center"
						},
						on: {
							click: function(t) {
								arguments[0] = t = e
									.$handleEvent(t), e.onNew
									.apply(void 0, arguments)
							}
						}
					}, [i("v-uni-view", {
						staticClass: "tip-text"
					}, [i("u-icon", {
						attrs: {
							color: "#fff",
							labelColor: "#fff",
							name: "plus",
							label: "新建"
						}
					})], 1)], 1)], 2)], 1)], 1), e.mainBg ? i("aki-particles", {
						staticClass: "particles",
						attrs: {
							particlestyle: e.particlestyle
						}
					}) : e._e(), i("ithui-bullet-one", {
						attrs: {
							value: e.myTipFlag,
							title: "通知",
							buttonText: "朕已阅",
							icon: e.icon,
							content: e.guanfangTip
						},
						on: {
							input: function(t) {
								arguments[0] = t = e.$handleEvent(t), e.cancel.apply(
									void 0, arguments)
							}
						}
					})], 1)
				},
				r = []
		},
		"066c": function(e, t, i) {
			(function(e) {
				var t = i("7037").default;
				i("cb29"), i("14d9"), i("a434"), i("ac1f"), i("5319"), i("d3b7"), i("3ca3"), i("ddb0"),
					i("2b3d"), i("9861"), i("e25e"), i("c975");
				var a = function(i, a) {
					var s = document.querySelector("#" + i + " > .particles-js-canvas-el");
					this.pJS = {
						canvas: {
							el: s,
							w: s.offsetWidth,
							h: s.offsetHeight
						},
						particles: {
							number: {
								value: 400,
								density: {
									enable: !0,
									value_area: 800
								}
							},
							color: {
								value: "#fff"
							},
							shape: {
								type: "circle",
								stroke: {
									width: 0,
									color: "#ff0000"
								},
								polygon: {
									nb_sides: 5
								},
								image: {
									src: "",
									width: 100,
									height: 100
								}
							},
							opacity: {
								value: 1,
								random: !1,
								anim: {
									enable: !1,
									speed: 2,
									opacity_min: 0,
									sync: !1
								}
							},
							size: {
								value: 20,
								random: !1,
								anim: {
									enable: !1,
									speed: 20,
									size_min: 0,
									sync: !1
								}
							},
							line_linked: {
								enable: !0,
								distance: 100,
								color: "#fff",
								opacity: 1,
								width: 1
							},
							move: {
								enable: !0,
								speed: 2,
								direction: "none",
								random: !1,
								straight: !1,
								out_mode: "out",
								bounce: !1,
								attract: {
									enable: !1,
									rotateX: 3e3,
									rotateY: 3e3
								}
							},
							array: []
						},
						interactivity: {
							detect_on: "canvas",
							events: {
								onhover: {
									enable: !0,
									mode: "grab"
								},
								onclick: {
									enable: !0,
									mode: "push"
								},
								resize: !0
							},
							modes: {
								grab: {
									distance: 100,
									line_linked: {
										opacity: 1
									}
								},
								bubble: {
									distance: 200,
									size: 80,
									duration: .4
								},
								repulse: {
									distance: 200,
									duration: .4
								},
								push: {
									particles_nb: 4
								},
								remove: {
									particles_nb: 2
								}
							},
							mouse: {}
						},
						retina_detect: !1,
						fn: {
							interact: {},
							modes: {},
							vendors: {}
						},
						tmp: {}
					};
					var o = this.pJS;
					a && Object.deepExtend(o, a), o.tmp.obj = {
						size_value: o.particles.size.value,
						size_anim_speed: o.particles.size.anim.speed,
						move_speed: o.particles.move.speed,
						line_linked_distance: o.particles.line_linked.distance,
						line_linked_width: o.particles.line_linked.width,
						mode_grab_distance: o.interactivity.modes.grab.distance,
						mode_bubble_distance: o.interactivity.modes.bubble.distance,
						mode_bubble_size: o.interactivity.modes.bubble.size,
						mode_repulse_distance: o.interactivity.modes.repulse.distance
					}, o.fn.retinaInit = function() {
						o.retina_detect && window.devicePixelRatio > 1 ? (o.canvas.pxratio =
								window.devicePixelRatio, o.tmp.retina = !0) : (o.canvas
								.pxratio = 1, o.tmp.retina = !1), o.canvas.w = o.canvas.el
							.offsetWidth * o.canvas.pxratio, o.canvas.h = o.canvas.el
							.offsetHeight * o.canvas.pxratio, o.particles.size.value = o.tmp.obj
							.size_value * o.canvas.pxratio, o.particles.size.anim.speed = o.tmp
							.obj.size_anim_speed * o.canvas.pxratio, o.particles.move.speed = o
							.tmp.obj.move_speed * o.canvas.pxratio, o.particles.line_linked
							.distance = o.tmp.obj.line_linked_distance * o.canvas.pxratio, o
							.interactivity.modes.grab.distance = o.tmp.obj.mode_grab_distance *
							o.canvas.pxratio, o.interactivity.modes.bubble.distance = o.tmp.obj
							.mode_bubble_distance * o.canvas.pxratio, o.particles.line_linked
							.width = o.tmp.obj.line_linked_width * o.canvas.pxratio, o
							.interactivity.modes.bubble.size = o.tmp.obj.mode_bubble_size * o
							.canvas.pxratio, o.interactivity.modes.repulse.distance = o.tmp.obj
							.mode_repulse_distance * o.canvas.pxratio
					}, o.fn.canvasInit = function() {
						o.canvas.ctx = o.canvas.el.getContext("2d")
					}, o.fn.canvasSize = function() {
						o.canvas.el.width = o.canvas.w, o.canvas.el.height = o.canvas.h, o && o
							.interactivity.events.resize && window.addEventListener("resize", (
								function() {
									o.canvas.w = o.canvas.el.offsetWidth, o.canvas.h = o
										.canvas.el.offsetHeight, o.tmp.retina && (o.canvas
											.w *= o.canvas.pxratio, o.canvas.h *= o.canvas
											.pxratio), o.canvas.el.width = o.canvas.w, o
										.canvas.el.height = o.canvas.h, o.particles.move
										.enable || (o.fn.particlesEmpty(), o.fn
											.particlesCreate(), o.fn.particlesDraw(), o.fn
											.vendors.densityAutoParticles()), o.fn.vendors
										.densityAutoParticles()
								}))
					}, o.fn.canvasPaint = function() {
						o.canvas.ctx.fillRect(0, 0, o.canvas.w, o.canvas.h)
					}, o.fn.canvasClear = function() {
						o.canvas.ctx.clearRect(0, 0, o.canvas.w, o.canvas.h)
					}, o.fn.particle = function(e, i, a) {
						if (this.radius = (o.particles.size.random ? Math.random() : 1) * o
							.particles.size.value, o.particles.size.anim.enable && (this
								.size_status = !1, this.vs = o.particles.size.anim.speed / 100,
								o.particles.size.anim.sync || (this.vs = this.vs * Math
								.random())), this.x = a ? a.x : Math.random() * o.canvas.w, this
							.y = a ? a.y : Math.random() * o.canvas.h, this.x > o.canvas.w - 2 *
							this.radius ? this.x = this.x - this.radius : this.x < 2 * this
							.radius && (this.x = this.x + this.radius), this.y > o.canvas.h -
							2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this
							.radius && (this.y = this.y + this.radius), o.particles.move
							.bounce && o.fn.vendors.checkOverlap(this, a), this.color = {},
							"object" == t(e.value))
							if (e.value instanceof Array) {
								var r = e.value[Math.floor(Math.random() * o.particles.color
									.value.length)];
								this.color.rgb = n(r)
							} else void 0 != e.value.r && void 0 != e.value.g && void 0 != e
								.value.b && (this.color.rgb = {
									r: e.value.r,
									g: e.value.g,
									b: e.value.b
								}), void 0 != e.value.h && void 0 != e.value.s && void 0 != e
								.value.l && (this.color.hsl = {
									h: e.value.h,
									s: e.value.s,
									l: e.value.l
								});
						else "random" == e.value ? this.color.rgb = {
							r: Math.floor(256 * Math.random()) + 0,
							g: Math.floor(256 * Math.random()) + 0,
							b: Math.floor(256 * Math.random()) + 0
						} : "string" == typeof e.value && (this.color = e, this.color.rgb =
							n(this.color.value));
						this.opacity = (o.particles.opacity.random ? Math.random() : 1) * o
							.particles.opacity.value, o.particles.opacity.anim.enable && (this
								.opacity_status = !1, this.vo = o.particles.opacity.anim.speed /
								100, o.particles.opacity.anim.sync || (this.vo = this.vo * Math
									.random()));
						var s = {};
						switch (o.particles.move.direction) {
							case "top":
								s = {
									x: 0,
									y: -1
								};
								break;
							case "top-right":
								s = {
									x: .5,
									y: -.5
								};
								break;
							case "right":
								s = {
									x: 1,
									y: -0
								};
								break;
							case "bottom-right":
								s = {
									x: .5,
									y: .5
								};
								break;
							case "bottom":
								s = {
									x: 0,
									y: 1
								};
								break;
							case "bottom-left":
								s = {
									x: -.5,
									y: 1
								};
								break;
							case "left":
								s = {
									x: -1,
									y: 0
								};
								break;
							case "top-left":
								s = {
									x: -.5,
									y: -.5
								};
								break;
							default:
								s = {
									x: 0,
									y: 0
								};
								break
						}
						o.particles.move.straight ? (this.vx = s.x, this.vy = s.y, o.particles
								.move.random && (this.vx = this.vx * Math.random(), this.vy =
									this.vy * Math.random())) : (this.vx = s.x + Math.random() -
								.5, this.vy = s.y + Math.random() - .5), this.vx_i = this.vx,
							this.vy_i = this.vy;
						var c = o.particles.shape.type;
						if ("object" == t(c)) {
							if (c instanceof Array) {
								var l = c[Math.floor(Math.random() * c.length)];
								this.shape = l
							}
						} else this.shape = c;
						if ("image" == this.shape) {
							var u = o.particles.shape;
							this.img = {
									src: u.image.src,
									ratio: u.image.width / u.image.height
								}, this.img.ratio || (this.img.ratio = 1), "svg" == o.tmp
								.img_type && void 0 != o.tmp.source_svg && (o.fn.vendors
									.createSvgImg(this), o.tmp.pushing && (this.img.loaded = !1)
									)
						}
					}, o.fn.particle.prototype.draw = function() {
						var e = this;
						if (void 0 != e.radius_bubble) var t = e.radius_bubble;
						else t = e.radius;
						if (void 0 != e.opacity_bubble) var i = e.opacity_bubble;
						else i = e.opacity;
						if (e.color.rgb) var a = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g +
							"," + e.color.rgb.b + "," + i + ")";
						else a = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color
							.hsl.l + "%," + i + ")";
						switch (o.canvas.ctx.fillStyle = a, o.canvas.ctx.beginPath(), e.shape) {
							case "circle":
								o.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
								break;
							case "edge":
								o.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
								break;
							case "triangle":
								o.fn.vendors.drawShape(o.canvas.ctx, e.x - t, e.y + t / 1.66,
									2 * t, 3, 2);
								break;
							case "polygon":
								o.fn.vendors.drawShape(o.canvas.ctx, e.x - t / (o.particles
										.shape.polygon.nb_sides / 3.5), e.y - t / .76,
									2.66 * t / (o.particles.shape.polygon.nb_sides / 3), o
									.particles.shape.polygon.nb_sides, 1);
								break;
							case "star":
								o.fn.vendors.drawShape(o.canvas.ctx, e.x - 2 * t / (o.particles
										.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 *
									t * 2.66 / (o.particles.shape.polygon.nb_sides / 3), o
									.particles.shape.polygon.nb_sides, 2);
								break;
							case "image":
								if ("svg" == o.tmp.img_type) var n = e.img.obj;
								else n = o.tmp.img_obj;
								n && function() {
									o.canvas.ctx.drawImage(n, e.x - t, e.y - t, 2 * t, 2 *
										t / e.img.ratio)
								}();
								break
						}
						o.canvas.ctx.closePath(), o.particles.shape.stroke.width > 0 && (o
							.canvas.ctx.strokeStyle = o.particles.shape.stroke.color, o
							.canvas.ctx.lineWidth = o.particles.shape.stroke.width, o.canvas
							.ctx.stroke()), o.canvas.ctx.fill()
					}, o.fn.particlesCreate = function() {
						for (var e = 0; e < o.particles.number.value; e++) o.particles.array
							.push(new o.fn.particle(o.particles.color, o.particles.opacity
								.value))
					}, o.fn.particlesUpdate = function() {
						for (var e = 0; e < o.particles.array.length; e++) {
							var t = o.particles.array[e];
							if (o.particles.move.enable) {
								var i = o.particles.move.speed / 2;
								t.x += t.vx * i, t.y += t.vy * i
							}
							if (o.particles.opacity.anim.enable && (1 == t.opacity_status ? (t
										.opacity >= o.particles.opacity.value && (t
											.opacity_status = !1), t.opacity += t.vo) : (t
										.opacity <= o.particles.opacity.anim.opacity_min && (t
											.opacity_status = !0), t.opacity -= t.vo), t
									.opacity < 0 && (t.opacity = 0)), o.particles.size.anim
								.enable && (1 == t.size_status ? (t.radius >= o.particles.size
										.value && (t.size_status = !1), t.radius += t.vs) : (t
										.radius <= o.particles.size.anim.size_min && (t
											.size_status = !0), t.radius -= t.vs), t.radius <
									0 && (t.radius = 0)), "bounce" == o.particles.move.out_mode)
								var a = {
									x_left: t.radius,
									x_right: o.canvas.w,
									y_top: t.radius,
									y_bottom: o.canvas.h
								};
							else a = {
								x_left: -t.radius,
								x_right: o.canvas.w + t.radius,
								y_top: -t.radius,
								y_bottom: o.canvas.h + t.radius
							};
							switch (t.x - t.radius > o.canvas.w ? (t.x = a.x_left, t.y = Math
									.random() * o.canvas.h) : t.x + t.radius < 0 && (t.x = a
									.x_right, t.y = Math.random() * o.canvas.h), t.y - t
								.radius > o.canvas.h ? (t.y = a.y_top, t.x = Math.random() * o
									.canvas.w) : t.y + t.radius < 0 && (t.y = a.y_bottom, t.x =
									Math.random() * o.canvas.w), o.particles.move.out_mode) {
								case "bounce":
									(t.x + t.radius > o.canvas.w || t.x - t.radius < 0) && (t
										.vx = -t.vx), (t.y + t.radius > o.canvas.h || t.y - t
										.radius < 0) && (t.vy = -t.vy);
									break
							}
							if (r("grab", o.interactivity.events.onhover.mode) && o.fn.modes
								.grabParticle(t), (r("bubble", o.interactivity.events.onhover
									.mode) || r("bubble", o.interactivity.events.onclick
									.mode)) && o.fn.modes.bubbleParticle(t), (r("repulse", o
									.interactivity.events.onhover.mode) || r("repulse", o
									.interactivity.events.onclick.mode)) && o.fn.modes
								.repulseParticle(t), o.particles.line_linked.enable || o
								.particles.move.attract.enable)
								for (var n = e + 1; n < o.particles.array.length; n++) {
									var s = o.particles.array[n];
									o.particles.line_linked.enable && o.fn.interact
										.linkParticles(t, s), o.particles.move.attract.enable &&
										o.fn.interact.attractParticles(t, s), o.particles.move
										.bounce && o.fn.interact.bounceParticles(t, s)
								}
						}
					}, o.fn.particlesDraw = function() {
						o.canvas.ctx.clearRect(0, 0, o.canvas.w, o.canvas.h), o.fn
							.particlesUpdate();
						for (var e = 0; e < o.particles.array.length; e++) {
							var t = o.particles.array[e];
							t.draw()
						}
					}, o.fn.particlesEmpty = function() {
						o.particles.array = []
					}, o.fn.particlesRefresh = function() {
						cancelRequestAnimFrame(o.fn.checkAnimFrame), cancelRequestAnimFrame(o.fn
								.drawAnimFrame), o.tmp.source_svg = void 0, o.tmp.img_obj =
							void 0, o.tmp.count_svg = 0, o.fn.particlesEmpty(), o.fn
							.canvasClear(), o.fn.vendors.start()
					}, o.fn.interact.linkParticles = function(e, t) {
						var i = e.x - t.x,
							a = e.y - t.y,
							n = Math.sqrt(i * i + a * a);
						if (n <= o.particles.line_linked.distance) {
							var r = o.particles.line_linked.opacity - n / (1 / o.particles
								.line_linked.opacity) / o.particles.line_linked.distance;
							if (r > 0) {
								var s = o.particles.line_linked.color_rgb_line;
								o.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s
									.b + "," + r + ")", o.canvas.ctx.lineWidth = o.particles
									.line_linked.width, o.canvas.ctx.beginPath(), o.canvas.ctx
									.moveTo(e.x, e.y), o.canvas.ctx.lineTo(t.x, t.y), o.canvas
									.ctx.stroke(), o.canvas.ctx.closePath()
							}
						}
					}, o.fn.interact.attractParticles = function(e, t) {
						var i = e.x - t.x,
							a = e.y - t.y,
							n = Math.sqrt(i * i + a * a);
						if (n <= o.particles.line_linked.distance) {
							var r = i / (1e3 * o.particles.move.attract.rotateX),
								s = a / (1e3 * o.particles.move.attract.rotateY);
							e.vx -= r, e.vy -= s, t.vx += r, t.vy += s
						}
					}, o.fn.interact.bounceParticles = function(e, t) {
						var i = e.x - t.x,
							a = e.y - t.y,
							n = Math.sqrt(i * i + a * a),
							r = e.radius + t.radius;
						n <= r && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
					}, o.fn.modes.pushParticles = function(e, t) {
						o.tmp.pushing = !0;
						for (var i = 0; i < e; i++) o.particles.array.push(new o.fn.particle(o
							.particles.color, o.particles.opacity.value, {
								x: t ? t.pos_x : Math.random() * o.canvas.w,
								y: t ? t.pos_y : Math.random() * o.canvas.h
							})), i == e - 1 && (o.particles.move.enable || o.fn
							.particlesDraw(), o.tmp.pushing = !1)
					}, o.fn.modes.removeParticles = function(e) {
						o.particles.array.splice(0, e), o.particles.move.enable || o.fn
							.particlesDraw()
					}, o.fn.modes.bubbleParticle = function(e) {
						if (o.interactivity.events.onhover.enable && r("bubble", o.interactivity
								.events.onhover.mode)) {
							var t = function() {
									e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
								},
								i = e.x - o.interactivity.mouse.pos_x,
								a = e.y - o.interactivity.mouse.pos_y,
								n = Math.sqrt(i * i + a * a),
								s = 1 - n / o.interactivity.modes.bubble.distance;
							if (n <= o.interactivity.modes.bubble.distance) {
								if (s >= 0 && "mousemove" == o.interactivity.status) {
									if (o.interactivity.modes.bubble.size != o.particles.size
										.value)
										if (o.interactivity.modes.bubble.size > o.particles.size
											.value) {
											var c = e.radius + o.interactivity.modes.bubble
												.size * s;
											c >= 0 && (e.radius_bubble = c)
										} else {
											var l = e.radius - o.interactivity.modes.bubble
											.size;
											c = e.radius - l * s;
											e.radius_bubble = c > 0 ? c : 0
										} if (o.interactivity.modes.bubble.opacity != o
										.particles.opacity.value)
										if (o.interactivity.modes.bubble.opacity > o.particles
											.opacity.value) {
											var u = o.interactivity.modes.bubble.opacity * s;
											u > e.opacity && u <= o.interactivity.modes.bubble
												.opacity && (e.opacity_bubble = u)
										} else {
											u = e.opacity - (o.particles.opacity.value - o
												.interactivity.modes.bubble.opacity) * s;
											u < e.opacity && u >= o.interactivity.modes.bubble
												.opacity && (e.opacity_bubble = u)
										}
								}
							} else t();
							"mouseleave" == o.interactivity.status && t()
						} else if (o.interactivity.events.onclick.enable && r("bubble", o
								.interactivity.events.onclick.mode)) {
							var d = function(t, i, a, r, s) {
								if (t != i)
									if (o.tmp.bubble_duration_end) {
										if (void 0 != a) {
											var c = r - p * (r - t) / o.interactivity.modes
												.bubble.duration,
												l = t - c;
											d = t + l, "size" == s && (e.radius_bubble = d),
												"opacity" == s && (e.opacity_bubble = d)
										}
									} else if (n <= o.interactivity.modes.bubble.distance) {
									if (void 0 != a) var u = a;
									else u = r;
									if (u != t) {
										var d = r - p * (r - t) / o.interactivity.modes
											.bubble.duration;
										"size" == s && (e.radius_bubble = d), "opacity" ==
											s && (e.opacity_bubble = d)
									}
								} else "size" == s && (e.radius_bubble = void 0),
									"opacity" == s && (e.opacity_bubble = void 0)
							};
							if (o.tmp.bubble_clicking) {
								i = e.x - o.interactivity.mouse.click_pos_x, a = e.y - o
									.interactivity.mouse.click_pos_y, n = Math.sqrt(i * i + a *
										a);
								var p = ((new Date).getTime() - o.interactivity.mouse
									.click_time) / 1e3;
								p > o.interactivity.modes.bubble.duration && (o.tmp
										.bubble_duration_end = !0), p > 2 * o.interactivity
									.modes.bubble.duration && (o.tmp.bubble_clicking = !1, o.tmp
										.bubble_duration_end = !1)
							}
							o.tmp.bubble_clicking && (d(o.interactivity.modes.bubble.size, o
								.particles.size.value, e.radius_bubble, e.radius, "size"
								), d(o.interactivity.modes.bubble.opacity, o.particles
								.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
						}
					}, o.fn.modes.repulseParticle = function(e) {
						if (o.interactivity.events.onhover.enable && r("repulse", o
								.interactivity.events.onhover.mode) && "mousemove" == o
							.interactivity.status) {
							var t = e.x - o.interactivity.mouse.pos_x,
								i = e.y - o.interactivity.mouse.pos_y,
								a = Math.sqrt(t * t + i * i),
								n = {
									x: t / a,
									y: i / a
								},
								s = o.interactivity.modes.repulse.distance,
								c = function(e, t, i) {
									return Math.min(Math.max(e, t), i)
								}(1 / s * (-1 * Math.pow(a / s, 2) + 1) * s * 100, 0, 50),
								l = {
									x: e.x + n.x * c,
									y: e.y + n.y * c
								};
							"bounce" == o.particles.move.out_mode ? (l.x - e.radius > 0 && l.x +
								e.radius < o.canvas.w && (e.x = l.x), l.y - e.radius > 0 &&
								l.y + e.radius < o.canvas.h && (e.y = l.y)) : (e.x = l.x, e
								.y = l.y)
						} else if (o.interactivity.events.onclick.enable && r("repulse", o
								.interactivity.events.onclick.mode))
							if (o.tmp.repulse_finish || (o.tmp.repulse_count++, o.tmp
									.repulse_count == o.particles.array.length && (o.tmp
										.repulse_finish = !0)), o.tmp.repulse_clicking) {
								s = Math.pow(o.interactivity.modes.repulse.distance / 6, 3);
								var u = o.interactivity.mouse.click_pos_x - e.x,
									d = o.interactivity.mouse.click_pos_y - e.y,
									p = u * u + d * d,
									v = -s / p * 1;
								p <= s && function() {
									var t = Math.atan2(d, u);
									if (e.vx = v * Math.cos(t), e.vy = v * Math.sin(t),
										"bounce" == o.particles.move.out_mode) {
										var i = {
											x: e.x + e.vx,
											y: e.y + e.vy
										};
										(i.x + e.radius > o.canvas.w || i.x - e.radius <
										0) && (e.vx = -e.vx), (i.y + e.radius > o.canvas
											.h || i.y - e.radius < 0) && (e.vy = -e.vy)
									}
								}()
							} else 0 == o.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
					}, o.fn.modes.grabParticle = function(e) {
						if (o.interactivity.events.onhover.enable && "mousemove" == o
							.interactivity.status) {
							var t = e.x - o.interactivity.mouse.pos_x,
								i = e.y - o.interactivity.mouse.pos_y,
								a = Math.sqrt(t * t + i * i);
							if (a <= o.interactivity.modes.grab.distance) {
								var n = o.interactivity.modes.grab.line_linked.opacity - a / (
										1 / o.interactivity.modes.grab.line_linked.opacity) / o
									.interactivity.modes.grab.distance;
								if (n > 0) {
									var r = o.particles.line_linked.color_rgb_line;
									o.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," +
										r.b + "," + n + ")", o.canvas.ctx.lineWidth = o
										.particles.line_linked.width, o.canvas.ctx.beginPath(),
										o.canvas.ctx.moveTo(e.x, e.y), o.canvas.ctx.lineTo(o
											.interactivity.mouse.pos_x, o.interactivity.mouse
											.pos_y), o.canvas.ctx.stroke(), o.canvas.ctx
										.closePath()
								}
							}
						}
					}, o.fn.vendors.eventsListeners = function() {
						"window" == o.interactivity.detect_on ? o.interactivity.el = window : o
							.interactivity.el = o.canvas.el, (o.interactivity.events.onhover
								.enable || o.interactivity.events.onclick.enable) && (o
								.interactivity.el.addEventListener("mousemove", (function(e) {
									if (o.interactivity.el == window) var t = e.clientX,
										i = e.clientY;
									else t = e.offsetX || e.clientX, i = e.offsetY || e
										.clientY;
									o.interactivity.mouse.pos_x = t, o.interactivity
										.mouse.pos_y = i, o.tmp.retina && (o
											.interactivity.mouse.pos_x *= o.canvas
											.pxratio, o.interactivity.mouse.pos_y *= o
											.canvas.pxratio), o.interactivity.status =
										"mousemove"
								})), o.interactivity.el.addEventListener("mouseleave", (
									function(e) {
										o.interactivity.mouse.pos_x = null, o.interactivity
											.mouse.pos_y = null, o.interactivity.status =
											"mouseleave"
									}))), o.interactivity.events.onclick.enable && o
							.interactivity.el.addEventListener("click", (function() {
								if (o.interactivity.mouse.click_pos_x = o.interactivity
									.mouse.pos_x, o.interactivity.mouse.click_pos_y = o
									.interactivity.mouse.pos_y, o.interactivity.mouse
									.click_time = (new Date).getTime(), o.interactivity
									.events.onclick.enable) switch (o.interactivity
									.events.onclick.mode) {
									case "push":
										o.particles.move.enable || 1 == o
											.interactivity.modes.push.particles_nb ?
											o.fn.modes.pushParticles(o.interactivity
												.modes.push.particles_nb, o
												.interactivity.mouse) : o
											.interactivity.modes.push.particles_nb >
											1 && o.fn.modes.pushParticles(o
												.interactivity.modes.push
												.particles_nb);
										break;
									case "remove":
										o.fn.modes.removeParticles(o.interactivity
											.modes.remove.particles_nb);
										break;
									case "bubble":
										o.tmp.bubble_clicking = !0;
										break;
									case "repulse":
										o.tmp.repulse_clicking = !0, o.tmp
											.repulse_count = 0, o.tmp
											.repulse_finish = !1, setTimeout((
													function() {
														o.tmp.repulse_clicking = !1
													}), 1e3 * o.interactivity.modes
												.repulse.duration);
										break
								}
							}))
					}, o.fn.vendors.densityAutoParticles = function() {
						if (o.particles.number.density.enable) {
							var e = o.canvas.el.width * o.canvas.el.height / 1e3;
							o.tmp.retina && (e /= 2 * o.canvas.pxratio);
							var t = e * o.particles.number.value / o.particles.number.density
								.value_area,
								i = o.particles.array.length - t;
							i < 0 ? o.fn.modes.pushParticles(Math.abs(i)) : o.fn.modes
								.removeParticles(i)
						}
					}, o.fn.vendors.checkOverlap = function(e, t) {
						for (var i = 0; i < o.particles.array.length; i++) {
							var a = o.particles.array[i],
								n = e.x - a.x,
								r = e.y - a.y,
								s = Math.sqrt(n * n + r * r);
							s <= e.radius + a.radius && (e.x = t ? t.x : Math.random() * o
								.canvas.w, e.y = t ? t.y : Math.random() * o.canvas.h, o.fn
								.vendors.checkOverlap(e))
						}
					}, o.fn.vendors.createSvgImg = function(e) {
						var t = o.tmp.source_svg,
							i = t.replace(/#([0-9A-F]{3,6})/gi, (function(t, i, a, n) {
								if (e.color.rgb) var r = "rgba(" + e.color.rgb.r + "," +
									e.color.rgb.g + "," + e.color.rgb.b + "," + e
									.opacity + ")";
								else r = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s +
									"%," + e.color.hsl.l + "%," + e.opacity + ")";
								return r
							})),
							a = new Blob([i], {
								type: "image/svg+xml;charset=utf-8"
							}),
							n = window.URL || window.webkitURL || window,
							r = n.createObjectURL(a),
							s = new Image;
						s.addEventListener("load", (function() {
							e.img.obj = s, e.img.loaded = !0, n.revokeObjectURL(r),
								o.tmp.count_svg++
						})), s.src = r
					}, o.fn.vendors.destroypJS = function() {
						cancelAnimationFrame(o.fn.drawAnimFrame), s.remove(), pJSDom = null
					}, o.fn.vendors.drawShape = function(e, t, i, a, n, r) {
						var s = n * r,
							o = n / r,
							c = 180 * (o - 2) / o,
							l = Math.PI - Math.PI * c / 180;
						e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
						for (var u = 0; u < s; u++) e.lineTo(a, 0), e.translate(a, 0), e.rotate(
							l);
						e.fill(), e.restore()
					}, o.fn.vendors.exportImg = function() {
						window.open(o.canvas.el.toDataURL("image/png"), "_blank")
					}, o.fn.vendors.loadImg = function(t) {
						if (o.tmp.img_error = void 0, "" != o.particles.shape.image.src)
							if ("svg" == t) {
								var i = new XMLHttpRequest;
								i.open("GET", o.particles.shape.image.src), i
									.onreadystatechange = function(t) {
										4 == i.readyState && (200 == i.status ? (o.tmp
											.source_svg = t.currentTarget.response, o.fn
											.vendors.checkBeforeDraw()) : (e.log(
												"Error pJS - Image not found"), o.tmp
											.img_error = !0))
									}, i.send()
							} else {
								var a = new Image;
								a.addEventListener("load", (function() {
									o.tmp.img_obj = a, o.fn.vendors
									.checkBeforeDraw()
								})), a.src = o.particles.shape.image.src
							}
						else e.log("Error pJS - No image.src"), o.tmp.img_error = !0
					}, o.fn.vendors.draw = function() {
						"image" == o.particles.shape.type ? "svg" == o.tmp.img_type ? o.tmp
							.count_svg >= o.particles.number.value ? (o.fn.particlesDraw(), o
								.particles.move.enable ? o.fn.drawAnimFrame = requestAnimFrame(o
									.fn.vendors.draw) : cancelRequestAnimFrame(o.fn
									.drawAnimFrame)) : o.tmp.img_error || (o.fn.drawAnimFrame =
								requestAnimFrame(o.fn.vendors.draw)) : void 0 != o.tmp.img_obj ?
							(o.fn.particlesDraw(), o.particles.move.enable ? o.fn
								.drawAnimFrame = requestAnimFrame(o.fn.vendors.draw) :
								cancelRequestAnimFrame(o.fn.drawAnimFrame)) : o.tmp.img_error ||
							(o.fn.drawAnimFrame = requestAnimFrame(o.fn.vendors.draw)) : (o.fn
								.particlesDraw(), o.particles.move.enable ? o.fn.drawAnimFrame =
								requestAnimFrame(o.fn.vendors.draw) : cancelRequestAnimFrame(o
									.fn.drawAnimFrame))
					}, o.fn.vendors.checkBeforeDraw = function() {
						"image" == o.particles.shape.type ? "svg" == o.tmp.img_type && void 0 ==
							o.tmp.source_svg ? o.tmp.checkAnimFrame = requestAnimFrame(check) :
							(cancelRequestAnimFrame(o.tmp.checkAnimFrame), o.tmp.img_error || (o
								.fn.vendors.init(), o.fn.vendors.draw())) : (o.fn.vendors
							.init(), o.fn.vendors.draw())
					}, o.fn.vendors.init = function() {
						o.fn.retinaInit(), o.fn.canvasInit(), o.fn.canvasSize(), o.fn
							.canvasPaint(), o.fn.particlesCreate(), o.fn.vendors
							.densityAutoParticles(), o.particles.line_linked.color_rgb_line = n(
								o.particles.line_linked.color)
					}, o.fn.vendors.start = function() {
						r("image", o.particles.shape.type) ? (o.tmp.img_type = o.particles.shape
								.image.src.substr(o.particles.shape.image.src.length - 3), o.fn
								.vendors.loadImg(o.tmp.img_type)) : o.fn.vendors
							.checkBeforeDraw()
					}, o.fn.vendors.eventsListeners(), o.fn.vendors.start()
				};

				function n(e) {
					e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, i, a) {
						return t + t + i + i + a + a
					}));
					var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
					return t ? {
						r: parseInt(t[1], 16),
						g: parseInt(t[2], 16),
						b: parseInt(t[3], 16)
					} : null
				}

				function r(e, t) {
					return t.indexOf(e) > -1
				}
				Object.deepExtend = function(e, t) {
					for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? (e[
						i] = e[i] || {}, arguments.callee(e[i], t[i])) : e[i] = t[i];
					return e
				}, window.requestAnimFrame = function() {
					return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window
						.msRequestAnimationFrame || function(e) {
							window.setTimeout(e, 1e3 / 60)
						}
				}(), window.cancelRequestAnimFrame = function() {
					return window.cancelAnimationFrame || window
						.webkitCancelRequestAnimationFrame || window
						.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame ||
						window.msCancelRequestAnimationFrame || clearTimeout
				}(), window.pJSDom = [], window.particlesJS = function(e, t) {
					"string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
					var i = document.getElementById(e),
						n = i.getElementsByClassName("particles-js-canvas-el");
					if (n.length)
						while (n.length > 0) i.removeChild(n[0]);
					var r = document.createElement("canvas");
					r.className = "particles-js-canvas-el", r.style.width = "100%", r.style.height =
						"100%";
					var s = document.getElementById(e).appendChild(r);
					null != s && pJSDom.push(new a(e, t))
				};
				var s = {
					particles: {
						number: {
							value: 400,
							density: {
								enable: !0,
								value_area: 800
							}
						},
						color: {
							value: "#fff"
						},
						shape: {
							type: "circle",
							stroke: {
								width: 0,
								color: "#000000"
							},
							polygon: {
								nb_sides: 5
							},
							image: {
								src: "img/github.svg",
								width: 100,
								height: 100
							}
						},
						opacity: {
							value: .5,
							random: !0,
							anim: {
								enable: !1,
								speed: 1,
								opacity_min: .1,
								sync: !1
							}
						},
						size: {
							value: 10,
							random: !0,
							anim: {
								enable: !1,
								speed: 40,
								size_min: .1,
								sync: !1
							}
						},
						line_linked: {
							enable: !1,
							distance: 500,
							color: "#ffffff",
							opacity: .4,
							width: 2
						},
						move: {
							enable: !0,
							speed: 6,
							direction: "bottom",
							random: !1,
							straight: !1,
							out_mode: "out",
							bounce: !1,
							attract: {
								enable: !1,
								rotateX: 600,
								rotateY: 1200
							}
						}
					},
					interactivity: {
						detect_on: "canvas",
						events: {
							onhover: {
								enable: !0,
								mode: "bubble"
							},
							onclick: {
								enable: !0,
								mode: "repulse"
							},
							resize: !0
						},
						modes: {
							grab: {
								distance: 400,
								line_linked: {
									opacity: .5
								}
							},
							bubble: {
								distance: 400,
								size: 4,
								duration: .3,
								opacity: 1,
								speed: 3
							},
							repulse: {
								distance: 200,
								duration: .4
							},
							push: {
								particles_nb: 4
							},
							remove: {
								particles_nb: 2
							}
						}
					},
					retina_detect: !0
				};
				window.particlesJS.load = function(e, t, i) {
					window.particlesJS(e, s)
				}
			}).call(this, i("5a52")["default"])
		},
		1671: function(e, t, i) {
			var a = i("9dfa");
			a.__esModule && (a = a.default), "string" === typeof a && (a = [
				[e.i, a, ""]
			]), a.locals && (e.exports = a.locals);
			var n = i("4f06").default;
			n("2ec1712e", a, !0, {
				sourceMap: !1,
				shadowMode: !1
			})
		},
		"27fa": function(e, t, i) {
			"use strict";
			var a = i("c1a4"),
				n = i.n(a);
			n.a
		},
		"36cd": function(e, t, i) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e, t) {
				if (!t && e && e.__esModule) return e;
				if (null === e || "object" !== (0, a.default)(e) && "function" !== typeof e) return {
					default: e
				};
				var i = n(t);
				if (i && i.has(e)) return i.get(e);
				var r = {},
					s = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (var o in e)
					if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
						var c = s ? Object.getOwnPropertyDescriptor(e, o) : null;
						c && (c.get || c.set) ? Object.defineProperty(r, o, c) : r[o] = e[o]
					} r["default"] = e, i && i.set(e, r);
				return r
			}, i("d3b7"), i("3ca3"), i("10d1"), i("ddb0"), i("7a82"), i("e439");
			var a = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(i("53ca"));

			function n(e) {
				if ("function" !== typeof WeakMap) return null;
				var t = new WeakMap,
					i = new WeakMap;
				return (n = function(e) {
					return e ? i : t
				})(e)
			}
		},
		"41aa": function(e, t, i) {
			var a = i("24fb");
			t = a(!1), t.push([e.i,
				'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.ithui-bullet .bullet-box[data-v-4ccd9137]{background-color:#fff;width:%?640?%;height:65vh;border-radius:%?20?%}.ithui-bullet .bullet-box .top[data-v-4ccd9137]{width:%?640?%;height:%?260?%}.ithui-bullet .bullet-box .top .bg[data-v-4ccd9137]{width:%?640?%;height:%?260?%}.ithui-bullet .bullet-box .top .bg uni-image[data-v-4ccd9137]{width:100%;height:100%;border-radius:%?20?% %?20?% 0 0}.ithui-bullet .bullet-box .top .sub[data-v-4ccd9137]{width:%?640?%;height:%?260?%;position:relative;top:%?-260?%;text-align:center;color:#fff;font-size:%?36?%;letter-spacing:%?5?%}.ithui-bullet .bullet-box .top .sub .icon[data-v-4ccd9137]{margin-top:%?20?%;margin-bottom:%?10?%;border-radius:%?120?%}.ithui-bullet .bullet-box .top .sub .icon uni-image[data-v-4ccd9137]{width:%?120?%;height:%?120?%;border-radius:%?120?%}.ithui-bullet .bullet-box .scroll-Y[data-v-4ccd9137]{margin-top:%?15?%;height:35vh}.ithui-bullet .bullet-box .scroll-Y .content[data-v-4ccd9137]{margin:0 %?30?%}.ithui-bullet .bullet-box .button[data-v-4ccd9137]{margin:%?20?% %?100?%}.ithui-bullet .bullet-close[data-v-4ccd9137]{margin-top:%?20?%;display:flex;justify-content:center}',
				""
			]), e.exports = t
		},
		4346: function(e, t, i) {
			"use strict";
			var a = i("e267"),
				n = i.n(a);
			n.a
		},
		"4a77": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return a
			})), i.d(t, "c", (function() {
				return n
			})), i.d(t, "a", (function() {}));
			var a = function() {
					var e = this.$createElement,
						t = this._self._c || e;
					return t("v-uni-view", [t("v-uni-view", {
						style: "background-color: " + this.particlestyle.bgcolor +
							";z-index: " + this.particlestyle.zindex,
						attrs: {
							id: "particles"
						}
					})], 1)
				},
				n = []
		},
		"4ad7": function(e, t, i) {
			var a = i("24fb");
			t = a(!1), t.push([e.i,
				'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */#particles[data-v-6ac0b7df]{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:cover;background-position:50% 50%}',
				""
			]), e.exports = t
		},
		"6b46": function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("d5a0"),
				n = i.n(a);
			for (var r in a)["default"].indexOf(r) < 0 && function(e) {
				i.d(t, e, (function() {
					return a[e]
				}))
			}(r);
			t["default"] = n.a
		},
		"6ec0": function(e, t, i) {
			var a = i("4ad7");
			a.__esModule && (a = a.default), "string" === typeof a && (a = [
				[e.i, a, ""]
			]), a.locals && (e.exports = a.locals);
			var n = i("4f06").default;
			n("f4173818", a, !0, {
				sourceMap: !1,
				shadowMode: !1
			})
		},
		7260: function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("0369"),
				n = i("be51");
			for (var r in n)["default"].indexOf(r) < 0 && function(e) {
				i.d(t, e, (function() {
					return n[e]
				}))
			}(r);
			i("27fa");
			var s = i("f0c5"),
				o = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "50dbee32", null, !1, a["a"],
					void 0);
			t["default"] = o.exports
		},
		7560: function(e, t, i) {
			"use strict";
			var a = i("daa2"),
				n = i.n(a);
			n.a
		},
		7815: function(e, t, i) {
			"use strict";
			i("7a82"), Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.guanfangTip = void 0;
			t.guanfangTip =
				"欢迎来到情侣飞行棋"
		},
		"7d17": function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("a997"),
				n = i.n(a);
			for (var r in a)["default"].indexOf(r) < 0 && function(e) {
				i.d(t, e, (function() {
					return a[e]
				}))
			}(r);
			t["default"] = n.a
		},
		8231: function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("8453"),
				n = i("f8d5");
			for (var r in n)["default"].indexOf(r) < 0 && function(e) {
				i.d(t, e, (function() {
					return n[e]
				}))
			}(r);
			i("f204");
			var s = i("f0c5"),
				o = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "4ccd9137", null, !1, a["a"],
					void 0);
			t["default"] = o.exports
		},
		8453: function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "a", (function() {
				return a
			}));
			var a = {
					uPopup: i("6c36").default,
					uButton: i("e741").default,
					uIcon: i("a6a2").default
				},
				n = function() {
					var e = this,
						t = e.$createElement,
						i = e._self._c || t;
					return i("v-uni-view", {
						staticClass: "ithui-bullet"
					}, [i("u-popup", {
						attrs: {
							show: e.value,
							zIndex: e.zIndex,
							overlayOpacity: e.opacity,
							closeOnClickOverlay: e.closeOnClickOverlay,
							mode: "center",
							bgColor: "transparent"
						},
						on: {
							click: function(t) {
								arguments[0] = t = e.$handleEvent(t), e
									.handleCloseOnClickOverlay.apply(void 0, arguments)
							}
						}
					}, [i("v-uni-view", {
						staticClass: "bullet-box"
					}, [i("v-uni-view", {
						staticClass: "top"
					}, [i("v-uni-view", {
						staticClass: "bg"
					}, [i("v-uni-image", {
						attrs: {
							src: "/static/style-one/top-bg.png"
						}
					})], 1), i("v-uni-view", {
						staticClass: "sub"
					}, [i("v-uni-view", {
						staticClass: "icon"
					}, [i("v-uni-image", {
						attrs: {
							src: e.icon
						}
					})], 1), i("v-uni-view", {
						staticClass: "title"
					}, [e._v(e._s(e.title))])], 1)], 1), i(
					"v-uni-scroll-view", {
						staticClass: "scroll-Y",
						attrs: {
							"scroll-top": e.scrollTop,
							"scroll-y": !0
						},
						on: {
							scroll: function(t) {
								arguments[0] = t = e.$handleEvent(t), e
									.scroll.apply(void 0, arguments)
							}
						}
					}, [i("v-uni-view", {
						staticClass: "content"
					}, [i("v-uni-rich-text", {
						attrs: {
							nodes: e.content
						}
					})], 1)], 1), i("v-uni-view", {
						staticClass: "button"
					}, [i("u-button", {
						attrs: {
							shape: "circle",
							color: e.buttonColor,
							text: e.buttonText
						},
						on: {
							click: function(t) {
								arguments[0] = t = e
									.$handleEvent(t), e.handleOK
									.apply(void 0, arguments)
							}
						}
					})], 1)], 1), i("v-uni-view", {
						staticClass: "bullet-close"
					}, [i("u-icon", {
						attrs: {
							name: "close-circle",
							color: "#fff",
							size: "34"
						},
						on: {
							click: function(t) {
								arguments[0] = t = e.$handleEvent(t), e
									.handleClose.apply(void 0,
										arguments)
							}
						}
					})], 1)], 1)], 1)
				},
				r = []
		},
		"86ae": function(e, t, i) {
			var a = i("24fb");
			t = a(!1), t.push([e.i,
				'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-50dbee32] .u-modal__title{padding-left:%?40?%;padding-right:%?40?%}.hot[data-v-50dbee32]{color:#fff;padding:%?2?% 0;width:%?220?%;text-align:center;font-size:10px;text-shadow:2px 2px 4px rgba(0,0,0,.5);font-weight:700;background:linear-gradient(90deg,#cb2b28,#a31f1c,#cb2b28);-webkit-transform:rotate(-50deg);transform:rotate(-50deg);position:absolute;left:-20px}.bottom-bg[data-v-50dbee32]{position:fixed;z-index:999;bottom:0;left:0;right:0;height:44px;background-color:initial!important;background-image:radial-gradient(transparent 1px,rgba(0,0,0,.396078431372549) 0);-webkit-backdrop-filter:saturate(50%) blur(4px);backdrop-filter:saturate(50%) blur(4px);background-size:4px 4px;border-bottom:%?1?% solid #000}.navbar[data-v-50dbee32] .u-navbar__content{background-color:initial!important;background-image:radial-gradient(transparent 1px,rgba(0,0,0,.396078431372549) 0);-webkit-backdrop-filter:saturate(50%) blur(4px);backdrop-filter:saturate(50%) blur(4px);background-size:4px 4px;border-bottom:%?1?% solid #000}.particles[data-v-50dbee32]{position:fixed;width:100%;height:100vh}.btn[data-v-50dbee32]{--purple:#9b7eda;min-height:%?110?%;margin-bottom:%?30?%;display:flex;flex-direction:row-reverse;align-items:center;padding:%?35?% %?20?%;font-size:18px;letter-spacing:.08em;position:relative;font-family:inherit;border-radius:.6em;overflow:hidden;transition:all .3s;border:2px solid var(--purple);background:linear-gradient(90deg,rgba(155,126,218,.1) 1%,transparent 40%,transparent 60%,rgba(155,126,218,.1));color:#fff;box-shadow:inset 0 0 10px rgba(155,126,218,.4),0 0 9px 3px rgba(155,126,218,.1)}.btn[data-v-50dbee32]::before{content:"";position:absolute;left:-4em;width:4em;height:100%;top:0;transition:-webkit-transform .4s ease-in-out;transition:transform .4s ease-in-out;transition:transform .4s ease-in-out,-webkit-transform .4s ease-in-out;background:linear-gradient(90deg,transparent 1%,rgba(155,126,218,.1) 40%,rgba(155,126,218,.1) 60%,transparent)}.my-text[data-v-50dbee32]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.active[data-v-50dbee32]{color:#bfa3f3;box-shadow:inset 0 0 10px rgba(155,126,218,.6),0 0 9px 3px rgba(155,126,218,.2);transition:all .75s ease-in-out;-webkit-transform-origin:center;transform-origin:center;-webkit-transform:scale(1.75);transform:scale(1.75);opacity:0}.active[data-v-50dbee32]:before{-webkit-transform:translateX(15em);transform:translateX(15em)}.body[data-v-50dbee32]{position:fixed;z-index:999;left:0;top:0;right:0;bottom:0;display:flex;flex-direction:column;background-color:#1f1f27}.main[data-v-50dbee32]{position:relative;z-index:99;flex:1;overflow-y:scroll}.main .my-main[data-v-50dbee32]{display:flex;flex-direction:column;margin:%?50?% auto;width:%?500?%}.tip-box[data-v-50dbee32]{margin-bottom:%?15?%;color:#333;width:70vw;border-radius:%?20?%;display:flex;justify-content:space-between;align-items:center;padding:%?20?%;background-color:hsla(0,0%,100%,.5);-webkit-backdrop-filter:blur(%?18?%);backdrop-filter:blur(%?18?%);box-shadow:0 %?2?% %?24?% 0 hsla(0,0%,100%,.3)}.tip-box .tip-text[data-v-50dbee32]{font-weight:700;color:#fff}',
				""
			]), e.exports = t
		},
		"901e": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "a", (function() {
				return a
			}));
			var a = {
					uLoadingIcon: i("cf6a").default
				},
				n = function() {
					var e = this,
						t = e.$createElement,
						i = e._self._c || t;
					return i("v-uni-view", {
						staticClass: "u-switch",
						class: [e.disabled && "u-switch--disabled"],
						style: [e.switchStyle, e.$u.addStyle(e.customStyle)],
						on: {
							click: function(t) {
								arguments[0] = t = e.$handleEvent(t), e.clickHandler.apply(
									void 0, arguments)
							}
						}
					}, [i("v-uni-view", {
						staticClass: "u-switch__bg",
						style: [e.bgStyle]
					}), i("v-uni-view", {
						ref: "u-switch__node",
						staticClass: "u-switch__node",
						class: [e.value && "u-switch__node--on"],
						style: [e.nodeStyle]
					}, [i("u-loading-icon", {
						attrs: {
							show: e.loading,
							mode: "circle",
							timingFunction: "linear",
							color: e.value ? e.activeColor : "#AAABAD",
							size: .6 * e.size
						}
					})], 1)], 1)
				},
				r = []
		},
		9215: function(e, t, i) {
			var a = i("24fb");
			t = a(!1), t.push([e.i,
				'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-12709030], uni-scroll-view[data-v-12709030], uni-swiper-item[data-v-12709030]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-switch[data-v-12709030]{display:flex;flex-direction:row;box-sizing:border-box;position:relative;background-color:#fff;border-width:1px;border-radius:100px;transition:background-color .4s;border-color:rgba(0,0,0,.12);border-style:solid;justify-content:flex-end;align-items:center;overflow:hidden}.u-switch__node[data-v-12709030]{display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:100px;background-color:#fff;border-radius:100px;box-shadow:1px 1px 1px 0 rgba(0,0,0,.25);transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;transition-timing-function:cubic-bezier(.3,1.05,.4,1.05)}.u-switch__bg[data-v-12709030]{position:absolute;border-radius:100px;background-color:#fff;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;border-top-left-radius:0;border-bottom-left-radius:0;transition-timing-function:ease}.u-switch--disabled[data-v-12709030]{opacity:.6}',
				""
			]), e.exports = t
		},
		"9dfa": function(e, t, i) {
			var a = i("24fb");
			t = a(!1), t.push([e.i,
				'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pass-box[data-v-280fc3ea]{width:%?600?%;border-radius:%?20?%;padding:%?20?%;background-color:#fff;margin:auto;left:%?75?%;top:35%;-webkit-transform:translateY(-50%);transform:translateY(-50%);box-sizing:border-box;position:absolute}.pass-box-head[data-v-280fc3ea]{position:relative;line-height:%?40?%}.pass-box-head__title[data-v-280fc3ea]{width:100%;text-align:center;font-size:%?28?%;font-weight:700}.pass-box-center[data-v-280fc3ea]{display:flex;flex-direction:column;align-items:center;margin:%?40?%}.pass-box-center__text[data-v-280fc3ea]{text-align:center;overflow:hidden;display:-webkit-box;margin-bottom:%?10?%;-webkit-line-clamp:2;-webkit-box-orient:vertical}.pass-box-center__money[data-v-280fc3ea]{position:relative;font-weight:700;display:flex;align-items:center}.pass-box-center__money uni-text[data-v-280fc3ea]{font-size:%?60?%}.pass-box-extend[data-v-280fc3ea]{border-top:1px solid #eee;padding:%?20?% 0}.pass-box-footer[data-v-280fc3ea]{display:flex;flex-direction:row;justify-content:space-between;margin:%?20?%}.pass-box-footer__passnum[data-v-280fc3ea]{max-width:%?100?%;max-height:%?100?%;border-radius:%?10?%;background-color:#eee;display:flex;align-items:center}.keyboard[data-v-280fc3ea]{position:absolute;width:%?750?%;bottom:0;bottom:env(safe-area-inset-bottom);background-color:#eee;display:grid;grid:%?100?%/repeat(3,1fr);grid-gap:1px}.keyboard-key[data-v-280fc3ea]{background-color:#fff;line-height:%?100?%;text-align:center;font-size:%?60?%}.keyboard-key__del[data-v-280fc3ea]{line-height:%?100?%;text-align:center;font-size:%?60?%}.copy[data-v-280fc3ea]{position:absolute;right:0;top:50%;-webkit-transform:translate(120%,-50%);transform:translate(120%,-50%)}',
				""
			]), e.exports = t
		},
		a6c0: function(e, t, i) {
			var a = i("41aa");
			a.__esModule && (a = a.default), "string" === typeof a && (a = [
				[e.i, a, ""]
			]), a.locals && (e.exports = a.locals);
			var n = i("4f06").default;
			n("ee75566a", a, !0, {
				sourceMap: !1,
				shadowMode: !1
			})
		},
		a997: function(e, t, i) {
			"use strict";
			i("7a82");
			var a = i("4ea4").default;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0, i("a9e3");
			var n = a(i("d50e")),
				r = {
					name: "u-switch",
					mixins: [uni.$u.mpMixin, uni.$u.mixin, n.default],
					watch: {
						value: {
							immediate: !0,
							handler: function(e) {
								e !== this.inactiveValue && e !== this.activeValue && uni.$u.error(
									"v-model绑定的值必须为inactiveValue、activeValue二者之一")
							}
						}
					},
					data: function() {
						return {
							bgColor: "#ffffff"
						}
					},
					computed: {
						isActive: function() {
							return this.value === this.activeValue
						},
						switchStyle: function() {
							var e = {};
							return e.width = uni.$u.addUnit(2 * this.size + 2), e.height = uni.$u
								.addUnit(Number(this.size) + 2), this.customInactiveColor && (e
									.borderColor = "rgba(0, 0, 0, 0)"), e.backgroundColor = this
								.isActive ? this.activeColor : this.inactiveColor, e
						},
						nodeStyle: function() {
							var e = {};
							e.width = uni.$u.addUnit(this.size - this.space), e.height = uni.$u.addUnit(
								this.size - this.space);
							var t = this.isActive ? uni.$u.addUnit(this.space) : uni.$u.addUnit(this
								.size);
							return e.transform = "translateX(-".concat(t, ")"), e
						},
						bgStyle: function() {
							var e = {};
							return e.width = uni.$u.addUnit(2 * Number(this.size) - this.size / 2), e
								.height = uni.$u.addUnit(this.size), e.backgroundColor = this
								.inactiveColor, e.transform = "scale(".concat(this.isActive ? 0 : 1,
									")"), e
						},
						customInactiveColor: function() {
							return "#fff" !== this.inactiveColor && "#ffffff" !== this.inactiveColor
						}
					},
					methods: {
						clickHandler: function() {
							var e = this;
							if (!this.disabled && !this.loading) {
								var t = this.isActive ? this.inactiveValue : this.activeValue;
								this.asyncChange || this.$emit("input", t), this.$nextTick((function() {
									e.$emit("change", t)
								}))
							}
						}
					}
				};
			t.default = r
		},
		b616: function(e, t, i) {
			"use strict";
			var a = i("6ec0"),
				n = i.n(a);
			n.a
		},
		be51: function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("c397"),
				n = i.n(a);
			for (var r in a)["default"].indexOf(r) < 0 && function(e) {
				i.d(t, e, (function() {
					return a[e]
				}))
			}(r);
			t["default"] = n.a
		},
		c1a4: function(e, t, i) {
			var a = i("86ae");
			a.__esModule && (a = a.default), "string" === typeof a && (a = [
				[e.i, a, ""]
			]), a.locals && (e.exports = a.locals);
			var n = i("4f06").default;
			n("3c113326", a, !0, {
				sourceMap: !1,
				shadowMode: !1
			})
		},
		c397: function(e, t, i) {
			"use strict";
			i("7a82");
			var a = i("4ea4").default;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0, i("d3b7"), i("99af"), i("c740");
			var n = a(i("5530")),
				r = a(i("2909")),
				s = a(i("36cd")),
				o = i("26cb"),
				c = i("6e13"),
				l = i("acf4"),
				u = a(i("8231")),
				d = i("7815"),
				p = i("aaec"),
				v = i("218b"),
				f = a(i("2ef0")),
				b = {
					components: {
						"aki-particles": function() {
							return Promise.resolve().then((function() {
								return (0, s.default)(i("d79a"))
							}))
						},
						"ithui-bullet-one": u.default
					},
					data: function() {
						return {
							mapNumber: v.mapNumber,
							encryptNumber: v.encryptNumber,
							decrypt: l.decrypt,
							myTipFlag: !1,
							guanfangTip: d.guanfangTip,
							icon: "/static/logosmall.png",
							mt: "",
							v: "v 2.1.0",
							particlestyle: {
								style: "snow",
								zindex: 1
							},
							title: "Hello",
							list: f.default.cloneDeep([].concat((0, r.default)(p.AllData), [{
								id: 11,
								title: "自定义",
								goFlag: !1,
								lockFlag: !0,
								hot: !1
							}])),
							flag: !1,
							setShow: !1,
							customShow: !1,
							stop: !1
						}
					},
					computed: (0, n.default)({}, (0, o.mapState)(["mainBg", "voiceOpen", "gameBg",
						"userCustomList", "soundFlag", "identificationCode", "lockVip",
						"tipFlag", "code"
					])),
					onLoad: function() {
						this.myTipFlag = this.tipFlag, this.setTo(), (0, c.sett)()
					},
					methods: (0, n.default)((0, n.default)({}, (0, o.mapMutations)(["setMainBg",
						"setGameBg", "setVoiceOpen", "setSoundFlag", "setLockVip",
						"setTipFlag", "setUserCode"
					])), {}, {
						confirmPwd: function(e) {
							var t = this,
								i = e.pass;


							//TODO 密码在这里
							let arr=['456444',"606060"]
							if (arr.includes(i)) {
								setTimeout((function() {
									clearTimeout(null), uni.hideLoading();

									uni.showModal({
										content: "激活成功！",
										showCancel: !1,
										success: function(e) {
											e.confirm && (t.setLockVip(!
												0), t.$refs.pwd
												.close())
										}
									})
								}), 1500)
							}else {
							    uni.showModal({
									content:"激活失败，激活码错误"
								})
							}

						},
						copySend: function() {
							uni.setClipboardData({
								data: "验证码 ".concat((0, v.mapNumber)((0, l.decrypt)(this
									.code))),
								success: function() {
									uni.showToast({
										title: "已复制到剪贴板",
										icon: "none"
									})
								}
							})
						},
						cancel: function() {
							this.myTipFlag = !1, this.setTipFlag(!1)
						},
						setTo: function() {
							this.mt = (0, l.decrypt)(
								"74f91a06929cf6ad41b9b3fbd0b94e17c177f3a5e45d2c886dcf030cd18db3a04e2aaa9d95ecf5284f4b96b0668a672693a206b690c5f024e2c7c7681e7973c5fdb6f3279872ebcfb7cd8904911e8a6187e20093c6d13cfc77435a8843104001"
								)
						},
						lockVipClick: function() {
							this.lockVip ? uni.showToast({
								title: "您已激活！",
								icon: "none"
							}) : this.$refs.pwd.open()
						},
						weGo: function(e) {
							if (this.lockVip || !e.lockFlag) {
								if (!this.stop)
									if (this.stop = !0, e.id != this.list[this.list.length - 1]
										.id) {
										var t = this.list.findIndex((function(t) {
											return t.id == e.id
										}));
										if (-1 != t) {
											this.list[t].goFlag = !0;
											var i = setTimeout((function() {
												clearTimeout(i), uni.reLaunch({
													url: e.url
												})
											}), 500)
										}
									} else this.onCustom()
							} else this.$refs.pwd.open()
						},
						goVersion: function() {
							uni.reLaunch({
								url: "/pagesA/version/version"
							})
						},
						goChess: function(e) {
							uni.reLaunch({
								url: "/pagesA/chess/chess?customId=".concat(e)
							})
						},
						onNew: function() {
							uni.reLaunch({
								url: "/pagesA/custom/custom"
							})
						},
						onCustom: function() {
							this.userCustomList.length ? (this.customShow = !0, this.stop = !
								1) : (this.list[this.list.length - 1].goFlag = !0, setTimeout((
									function() {
										uni.reLaunch({
											url: "/pagesA/custom/custom"
										})
									}), 500))
						},
						soundFlagChange: function(e) {
							this.setSoundFlag(e)
						},
						voiceOpenChange: function(e) {
							this.setVoiceOpen(e)
						},
						rightClick: function() {
							this.setShow = !0
						}
					})
				};
			t.default = b
		},
		c7cf: function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("e362"),
				n = i("d84d");
			for (var r in n)["default"].indexOf(r) < 0 && function(e) {
				i.d(t, e, (function() {
					return n[e]
				}))
			}(r);
			i("7560"), i("ee93");
			var s = i("f0c5"),
				o = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "280fc3ea", null, !1, a["a"],
					void 0);
			t["default"] = o.exports
		},
		cd68: function(e, t, i) {
			"use strict";
			i("7a82"), Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0, i("a9e3");
			var a = {
				name: "ithui-bullet-two",
				props: {
					value: {
						type: Boolean,
						default: !1
					},
					zIndex: {
						type: String | Number,
						default: 10086
					},
					opacity: {
						type: String | Number,
						default: .5
					},
					closeOnClickOverlay: {
						type: Boolean,
						default: !1
					},
					icon: {
						type: String,
						default: ""
					},
					title: {
						type: String,
						default: "标题"
					},
					content: {
						type: String,
						default: ""
					},
					buttonColor: {
						type: String,
						default: "linear-gradient(to right, #0db5f0, #2d95f1)"
					},
					buttonText: {
						type: String,
						default: "确定"
					}
				},
				data: function() {
					return {
						scrollTop: 0,
						old: {
							scrollTop: 0
						}
					}
				},
				methods: {
					handleOK: function() {
						this.$emit("input", !1), this.$emit("confirm")
					},
					handleCloseOnClickOverlay: function() {
						this.closeOnClickOverlay && (this.$emit("input", !1), this.$emit("close"))
					},
					handleClose: function() {
						this.$emit("input", !1), this.$emit("cancel")
					},
					scroll: function(e) {
						this.old.scrollTop = e.detail.scrollTop
					}
				}
			};
			t.default = a
		},
		d50e: function(e, t, i) {
			"use strict";
			i("7a82"), Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0, i("a9e3");
			var a = {
				props: {
					loading: {
						type: Boolean,
						default: uni.$u.props.switch.loading
					},
					disabled: {
						type: Boolean,
						default: uni.$u.props.switch.disabled
					},
					size: {
						type: [String, Number],
						default: uni.$u.props.switch.size
					},
					activeColor: {
						type: String,
						default: uni.$u.props.switch.activeColor
					},
					inactiveColor: {
						type: String,
						default: uni.$u.props.switch.inactiveColor
					},
					value: {
						type: [Boolean, String, Number],
						default: uni.$u.props.switch.value
					},
					activeValue: {
						type: [String, Number, Boolean],
						default: uni.$u.props.switch.activeValue
					},
					inactiveValue: {
						type: [String, Number, Boolean],
						default: uni.$u.props.switch.inactiveValue
					},
					asyncChange: {
						type: Boolean,
						default: uni.$u.props.switch.asyncChange
					},
					space: {
						type: [String, Number],
						default: uni.$u.props.switch.space
					}
				}
			};
			t.default = a
		},
		d5a0: function(e, t, i) {
			"use strict";
			i("7a82");
			var a = i("4ea4").default;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			a(i("066c"));
			var n = {
				name: "akira-particles",
				props: ["particlestyle"],
				mounted: function() {
					particlesJS.load("particles",
						"/uni_modules/aki-particles/static/aki-particles/particles-" + this
						.particlestyle.style + ".json")
				},
				data: function() {
					return {}
				}
			};
			t.default = n
		},
		d79a: function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("4a77"),
				n = i("6b46");
			for (var r in n)["default"].indexOf(r) < 0 && function(e) {
				i.d(t, e, (function() {
					return n[e]
				}))
			}(r);
			i("b616");
			var s = i("f0c5"),
				o = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "6ac0b7df", null, !1, a["a"],
					void 0);
			t["default"] = o.exports
		},
		d84d: function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("fa57"),
				n = i.n(a);
			for (var r in a)["default"].indexOf(r) < 0 && function(e) {
				i.d(t, e, (function() {
					return a[e]
				}))
			}(r);
			t["default"] = n.a
		},
		daa2: function(e, t, i) {
			var a = i("01d5");
			a.__esModule && (a = a.default), "string" === typeof a && (a = [
				[e.i, a, ""]
			]), a.locals && (e.exports = a.locals);
			var n = i("4f06").default;
			n("4f2b1355", a, !0, {
				sourceMap: !1,
				shadowMode: !1
			})
		},
		e267: function(e, t, i) {
			var a = i("9215");
			a.__esModule && (a = a.default), "string" === typeof a && (a = [
				[e.i, a, ""]
			]), a.locals && (e.exports = a.locals);
			var n = i("4f06").default;
			n("37468cae", a, !0, {
				sourceMap: !1,
				shadowMode: !1
			})
		},
		e362: function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "a", (function() {
				return a
			}));
			var a = {
					uniPopup: i("21c0").default,
					uButton: i("e741").default
				},
				n = function() {
					var e = this,
						t = e.$createElement,
						i = e._self._c || t;
					return i("uni-popup", {
						ref: e.ref,
						attrs: {
							"is-mask-click": !1,
							"safe-area": !0
						}
					}, [i("v-uni-view", {
						staticStyle: {
							width: "750rpx",
							height: "100vh"
						}
					}, [i("v-uni-view", {
						staticClass: "pass-box"
					}, [i("v-uni-view", {
							staticClass: "pass-box-head"
						}, [i("v-uni-text", {
							staticClass: "keyboard-icon key-shanchu",
							staticStyle: {
								position: "absolute",
								"font-size": "40rpx"
							},
							on: {
								click: function(t) {
									arguments[0] = t = e
										.$handleEvent(t), e.close
										.apply(void 0, arguments)
								}
							}
						}), i("v-uni-view", {
							staticClass: "pass-box-head__title"
						}, [e._v("识别码验证")])], 1), e.title ? i("v-uni-view", {
							staticClass: "pass-box-center"
						}, [i("v-uni-view", {
							staticClass: "pass-box-center__text"
						}, [e._v(e._s(e.title))]), e.money ? i(
						"v-uni-view", {
							staticClass: "pass-box-center__money"
						}, [i("v-uni-text", [e._v(e._s(e.money))]), i(
							"v-uni-view", {
								staticClass: "copy"
							}, [i("u-button", {
								staticStyle: {
									"margin-right": "-20px"
								},
								attrs: {
									text: "复制",
									size: "mini"
								},
								on: {
									click: function(t) {
										arguments[0] =
											t = e
											.$handleEvent(
												t), e
											.$emit(
												"copySend"
												)
									}
								}
							})], 1)], 1) : e._e()], 1) : e._e(), e.$slots.extend ?
						i("v-uni-view", {
							staticClass: "pass-box-extend"
						}, [e._t("extend")], 2) : e._e(), i("v-uni-view", {
							staticClass: "pass-box-footer",
							style: "--digit:" + e.digit
						}, e._l(e.digit, (function(t, a) {
							return i("v-uni-view", {
								key: a,
								staticClass: "pass-box-footer__passnum",
								style: {
									width: "calc(520rpx / " + e
										.digit + " - 10rpx)",
									height: "calc(520rpx / " + e
										.digit + " - 10rpx)"
								}
							}, [e.password[a] ? i(
							"v-uni-text", {
								staticClass: "keyboard-icon key-dian",
								staticStyle: {
									"margin-left": "50%",
									transform: "translateX(-50%)",
									"font-size": "76rpx"
								}
							}) : e._e()], 1)
						})), 1)
					], 1), i("v-uni-view", {
						staticClass: "keyboard"
					}, [e._l(9, (function(t, a) {
						return i("v-uni-view", {
							key: a,
							staticClass: "keyboard-key",
							attrs: {
								"hover-class": "key-hover",
								"hover-stay-time": 100
							},
							on: {
								click: function(t) {
									arguments[0] = t = e
										.$handleEvent(t), e
										.keyTap(a + 1)
								}
							}
						}, [e._v(e._s(a + 1))])
					})), i("v-uni-view", {}), i("v-uni-view", {
						staticClass: "keyboard-key",
						attrs: {
							"hover-class": "key-hover",
							"hover-stay-time": 100
						},
						on: {
							click: function(t) {
								arguments[0] = t = e.$handleEvent(t), e
									.keyTap(0)
							}
						}
					}, [e._v("0")]), i("v-uni-view", {
						staticClass: "keyboard-key__del",
						attrs: {
							"hover-class": "key-hover",
							"hover-stay-time": 100
						},
						on: {
							click: function(t) {
								arguments[0] = t = e.$handleEvent(t), e
									.keyTap("del")
							}
						}
					}, [i("v-uni-text", {
						staticClass: "keyboard-icon key-backspace"
					})], 1)], 2)], 1)], 1)
				},
				r = []
		},
		ee93: function(e, t, i) {
			"use strict";
			var a = i("1671"),
				n = i.n(a);
			n.a
		},
		f204: function(e, t, i) {
			"use strict";
			var a = i("a6c0"),
				n = i.n(a);
			n.a
		},
		f3b1: function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("901e"),
				n = i("7d17");
			for (var r in n)["default"].indexOf(r) < 0 && function(e) {
				i.d(t, e, (function() {
					return n[e]
				}))
			}(r);
			i("4346");
			var s = i("f0c5"),
				o = Object(s["a"])(n["default"], a["b"], a["c"], !1, null, "12709030", null, !1, a["a"],
					void 0);
			t["default"] = o.exports
		},
		f8d5: function(e, t, i) {
			"use strict";
			i.r(t);
			var a = i("cd68"),
				n = i.n(a);
			for (var r in a)["default"].indexOf(r) < 0 && function(e) {
				i.d(t, e, (function() {
					return a[e]
				}))
			}(r);
			t["default"] = n.a
		},
		fa57: function(e, t, i) {
			"use strict";

			function a() {
				return Math.random().toString(36).slice(-8)
			}
			i("7a82"), Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0, i("fb6a"), i("d401"), i("d3b7"), i("25f0"), i("a9e3"), i("e25e"), i(
				"14d9");
			var n = {
				name: "lyyPassInput",
				props: {
					title: String,
					money: [Number, String],
					digit: {
						type: Number,
						default: 6,
						validator: function(e) {
							return !isNaN(e) && e >= 4 && e <= 8
						}
					}
				},
				data: function() {
					return {
						ref: a(),
						password: []
					}
				},
				computed: {
					price: function() {
						return parseInt(this.money).toFixed(2)
					}
				},
				watch: {
					password: function(e) {
						e.length == this.digit && this.$emit("confirm", {
							pass: e.join("")
						})
					}
				},
				methods: {
					open: function() {
						this.$refs[this.ref].open()
					},
					close: function() {
						this.password = [], this.$refs[this.ref].close(), this.$emit("close")
					},
					keyTap: function(e) {
						var t = e.toString();
						"del" !== t ? this.password.length < this.digit && this.password.push(t) :
							this.password.pop()
					},
					clear: function() {
						this.password = []
					}
				}
			};
			t.default = n
		}
	}
]);
