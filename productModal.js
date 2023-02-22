export default{
    props:['isNew','temp','updateProduct','addImage'],
    template:`<div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
                <span v-if="isNew">新增產品</span>
                <span v-else>編輯產品</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-sm-4">
                    <div class="mb-2">
                        <div class="mb-3">
                            <label for="imageUrl" class="form-label">輸入圖片網址</label>
                            <input type="text" class="form-control" placeholder="請輸入圖片連結"
                                v-model="temp.imageUrl">
                        </div>
                        <img class="img-fluid" :src="temp.imageUrl">
                    </div>
                    <div>
                        <h4>多圖設置</h4>
                        <!--判斷temp.imagesUrl是一個陣列，避免出錯-->
                        <div v-if="Array.isArray(temp.imagesUrl)">
                            <template v-for="(image,index) in temp.imagesUrl" :key="index+5678">
                                <input type="text" class="form-control mb-3" placeholder="請輸入圖片連結"
                                    v-model="temp.imagesUrl[index]">
                                <img class="img-fluid mb-3" :src="temp.imagesUrl[index]">
                            </template>
                            <!--判斷新增、刪除出現的時機
                            新增的條件:1.欄位有填寫資料2.陣列是空的
                            刪除的條件:陣列不得為空-->
                            <button class="btn btn-outline-primary btn-sm d-block w-100" v-if="!temp.imagesUrl.length || 
                            temp.imagesUrl[temp.imagesUrl.length-1]" @click="temp.imagesUrl.push('')">
                                新增圖片
                            </button>
                            <button class="btn btn-outline-danger btn-sm d-block w-100" v-else
                                @click="temp.imagesUrl.pop()">
                                刪除圖片
                            </button>
                        </div>
                        <div v-else>
                            <button class="btn btn-outline-primary btn-sm d-block w-100" @click="addImage">
                                新增圖片
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="mb-3">
                        <label for="title" class="form-label">標題</label>
                        <input id="title" type="text" class="form-control" placeholder="請輸入標題"
                            v-model="temp.title">
                    </div>

                    <div class="row">
                        <div class="mb-3 col-md-6">
                            <label for="category" class="form-label">分類</label>
                            <input id="category" type="text" class="form-control" placeholder="請輸入分類"
                                v-model="temp.category">
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="price" class="form-label">單位</label>
                            <input id="unit" type="text" class="form-control" placeholder="請輸入單位"
                                v-model="temp.unit">
                        </div>
                    </div>

                    <div class="row">
                        <div class="mb-3 col-md-6">
                            <label for="origin_price" class="form-label">原價</label>
                            <input id="origin_price" type="number" min="0" class="form-control"
                                placeholder="請輸入原價" v-model.number="temp.origin_price">
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="price" class="form-label">售價</label>
                            <input id="price" type="number" min="0" class="form-control" placeholder="請輸入售價"
                                v-model.number="temp.price">
                        </div>
                    </div>
                    <hr>

                    <div class="mb-3">
                        <label for="description" class="form-label">產品描述</label>
                        <textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述"
                            v-model="temp.description">
                        </textarea>
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">說明內容</label>
                        <textarea id="description" type="text" class="form-control" placeholder="請輸入說明內容"
                            v-model="temp.content">
                        </textarea>
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1"
                                :false-value="0" v-model="temp.is_enabled">
                            <label class="form-check-label" for="is_enabled">是否啟用</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateProduct">
                確認
            </button>
        </div>
    </div>
</div>`
}