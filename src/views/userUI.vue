<template>
	<div class="picFile ">
		<b-form class="p-3" @submit.prevent="sendDataPost">
			<div class="mt-2"></div>
			<div v-for="(data, index) in formdata" class="row ">
				<b-form-group
					:label="data.name.toUpperCase()"
					:class="!data.state ? 'col-12 col-sm-12' : 'col-9 col-sm-9'"
				>
					<b-form-file
						ref="file"
						:id="data.name"
						:state="data.state"
						:placeholder="'Masukkan foto ' + data.name + '..'"
						size="sm"
						@change="onChangeFileSelected($event, data.id, index)"
					>
					</b-form-file>
					<div class="errorText mt-1" v-if="!data.formatState">
						Mohon Untuk Memasukkan File Berformat Image..!
					</div>
				</b-form-group>
				<div class="preview col-3 col-sm-3 p-1" v-if="data.state">
					<i style="font-size: 12px; margin-right: 10px">Preview</i>
					<img :id="'preview_' + index" />
				</div>
			</div>
			<b-button variant="info" type="submit" class="mb-4 mt-4 btn-block"
				>Simpan Data <b-icon icon="box-arrow-in-up-right"></b-icon>
			</b-button>
		</b-form>
	</div>
</template>
<script>
import { API_ENDPOINT } from "../functions/universal.js";	
const axios = require("axios");
export default {
	created() {
		this.insertInformation();
	},
	methods: {
		insertInformation() {
			this.$swal({
				title: "Masukan Kode Uker",
				icon: "info",
				input: "number",
				confirmButtonText: "Submit",
				allowOutsideClick: false,
			}).then((result) => {
				if (!result.value) {
					this.$swal({
						title: "Mohon Untuk Memasukkan Kode Uker",
						icon: "warning",
					}).then((result) => {
						this.insertInformation();
					});
				} else {
					this.$parent.kodeUker = result.value;
					this.$swal("Kode Uker Anda " + result.value, "", "success");
				}
			});
		},

		onChangeFileSelected(event, modelName, index) {
			let ext = event.target.files[0].type.split('/')[0];
			let reader = new FileReader();
			reader.onload = () => {
				let output = document.getElementById("preview_" + index);
				output.src = reader.result;
			};
			reader.readAsDataURL(event.target.files[0]);
			console.log(ext)
			if (ext != "image") {
				this.formdata[index].formatState = false;
			} else {
				this.formdata[index].formatState = true;
				this.formdata[index].state = true;

				this.photoData[modelName] = event.target.files[0];
				console.log(this.photoData);
			}
		},

		sendDataPost(e){
			let fd = new FormData();

			for(let item in this.photoData){
				fd.append(item, this.photoData[item]);
			}
			fd.append('kodeUker', this.$parent.kodeUker);
			axios.post(API_ENDPOINT + '/inputPhoto.php', fd,{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((response) => {
					console.log(response.data);
					if(response.data.status == 'success'){
						this.$swal('Berhasil','Data anda telah tersimpan','success');
					}
				})
		}
	},
	data() {
		return {
			photoData:{},
			formdata: [
				{
					id: "pylon",
					name: "pylon",
					state: false,
					formatState: true,
				},
				{
					id: "signage",
					name: "signage",
					state: false,
					formatState: true,
				},
				{
					id: "ALP",
					name: "Area luar parkir",
					state: false,
					formatState: true,
				},
				{
					id: "TPDGR",
					name: "Tampak Depan Gedung RUKO",
					state: false,
					formatState: true,
				},
				{
					id: "BH",
					name: "Banking Hall",
					state: false,
					formatState: true,
				},
				{
					id: "AT",
					name: "Area Teller",
					state: false,
					formatState: true,
				},
				{
					id: "AC",
					name: "Area Cs",
					state: false,
					formatState: true,
				},
				{
					id: "RPU",
					name: "Ruang Pemimpin UKO",
					state: false,
					formatState: true,
				},
				{
					id: "RM",
					name: "Ruang Marketing",
					state: false,
					formatState: true,
				},
				{
					id: "RR",
					name: "Ruang Rapat",
					state: false,
					formatState: true,
				},
				{
					id: "RTN",
					name: "Ruang Tunggu Nasabah",
					state: false,
					formatState: true,
				},
				{
					id: "RS",
					name: "Ruang Server",
					state: false,
					formatState: true,
				},
				{
					id: "RA",
					name: "Ruang Arsip/Dokumen",
					state: false,
					formatState: true,
				},
				{
					id: "RP",
					name: "Ruang Pantry",
					state: false,
					formatState: true,
				},
				{
					id: "toilet",
					name: "Toilet",
					state: false,
					formatState: true,
				},
				{
					id: "TDEPANEB",
					name: "Tampak Depan Gallery E-Banking",
					state: false,
					formatState: true,
				},
				{
					id: "TDALAMEB",
					name: "Tampak Dalam Gallery E-Banking",
					state: false,
					formatState: true,
				},
				{
					id: "TB",
					name: "Ruang Brankas/Kluis",
					state: false,
					formatState: true,
				},
			],
		};
	},
};
</script>
<style>
.picfile {
}
.preview img {
	height: 75px;
	width: 75px;
}
.preview {
	background-color: #f8f5f1;
	border-radius: 10px;
	margin-bottom: 8px;
}
.errorText {
	color: red;
	font-size: 80%;
}
</style>
