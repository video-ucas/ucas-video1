require 'test_helper'

class QaControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get qa_show_url
    assert_response :success
  end

end
