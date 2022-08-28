class ProductsController < ApplicationController
  
  inertia_share last_record: lambda { Product.last }
  
  def index
    @products = Product.search(params[:q]).filter_by(filter_params).order(sort_params)
    @pagy, @products = pagy @products, items: 10
    render inertia: "products-page", props: { products: @products, pagination: @pagy, params: params }
  end

  def show
    @product = Product.find(params[:id])
    render inertia: "product-page", props: { product: @product.as_json(include: :audits) }
  end

  def create
    @product = Product.new form_params
    if @product.save
      redirect_back fallback_location: products_path, notice: "Product created"
    else
      redirect_back fallback_location: products_path, inertia: { errors: @product.errors }
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(form_params)
      redirect_to params[:redirect] || @product, notice: "Product updated"
    else
      redirect_back fallback_location: @product, inertia: { errors: @product.errors }
    end
  end

  private

  def render_404
    render inertia: "not-found-page", props: { message: "Product not found" }
  end

  def form_params
    params.require(:product).permit(:name, :price, :antibiotic, :narcotic)
  end

  def filter_params
    params.slice(:min_price, :max_price, :narcotic, :antibiotic)
  end

end
