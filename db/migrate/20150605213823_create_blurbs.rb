class CreateBlurbs < ActiveRecord::Migration
  def change
    create_table :blurbs do |t|
      t.references :user, index: true, foreign_key: true
      t.text :body
      t.string :title
      
      t.timestamps null: false
    end
  end
end
