class AddColumnsToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :genre, :string
    add_column :songs, :description, :string
    add_column :songs, :tags, :string
  end
end
