class AddVideoLinkToRecipe < ActiveRecord::Migration
  def change
    add_column :recipes, :link, :string
  end
end
